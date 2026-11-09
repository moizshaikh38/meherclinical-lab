import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, MessageCircle, Trash2, Plus, Check, AlertCircle } from "lucide-react";
import {
  CATEGORIES,
  ALL_TESTS,
  PROFILE_GROUPS,
  LAB,
  wa,
  priceLabel,
  type FlatTest,
} from "@/lib/lab-data";

/* ---------- fuzzy match helpers ---------- */
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function fuzzyMatch(test: FlatTest, q: string): boolean {
  if (!q) return true;
  const nq = norm(q);
  const nt = norm(test.name);
  if (nt.includes(nq)) return true;
  if (norm(test.category).includes(nq)) return true;
  if (test.parentName && norm(test.parentName).includes(nq)) return true;
  // token-level fuzzy: any test word within edit-distance 1-2 of the query
  const tolerance = nq.length <= 4 ? 1 : 2;
  return nt.split(" ").some((w) => w.length >= 3 && editDistance(w, nq) <= tolerance);
}

export function Services() {
  const [query, setQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const [openCat, setOpenCat] = useState<string | null>(null);
  const [cart, setCart] = useState<FlatTest[]>([]);
  const [pendingProfile, setPendingProfile] = useState<FlatTest | null>(null);
  const [openSubTests, setOpenSubTests] = useState<Record<string, boolean>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  // Listen for hero-driven search
  useEffect(() => {
    const handler = (e: Event) => {
      const q = (e as CustomEvent<string>).detail ?? "";
      setQuery(q);
      setShowSuggest(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    };
    window.addEventListener("lab:search", handler as EventListener);
    return () => window.removeEventListener("lab:search", handler as EventListener);
  }, []);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return ALL_TESTS.filter((t) => fuzzyMatch(t, query)).slice(0, 14);
  }, [query]);

  const inCart = (name: string) => cart.some((c) => c.name === name);

  const isProfileSelected = (parentName: string) =>
    cart.some((c) => c.name === parentName);

  const getSelectedSubTestsOfProfile = (parentName: string) => {
    const group = PROFILE_GROUPS.find((g) => g.parentName === parentName);
    if (!group) return [];
    const subNames = group.subTests.map((s) => s.name);
    return cart.filter((c) => subNames.includes(c.name));
  };

  const toggleSubTestAccordion = (profileName: string) => {
    setOpenSubTests((prev) => ({ ...prev, [profileName]: !prev[profileName] }));
  };

  const handleTestClick = (t: FlatTest) => {
    // 1. Check if item is a profile parent
    const profileGroup = PROFILE_GROUPS.find((g) => g.parentName === t.name);
    if (profileGroup) {
      if (inCart(t.name)) {
        // Deselect profile
        setCart((prev) => prev.filter((c) => c.name !== t.name));
      } else {
        // Check if sub-tests are already selected
        const selectedSubTests = getSelectedSubTestsOfProfile(t.name);
        if (selectedSubTests.length > 0) {
          // Open prompt
          setPendingProfile(t);
        } else {
          // Add full profile to cart
          setCart((prev) => [...prev, { ...t, isProfile: true }]);
        }
      }
      return;
    }

    // 2. Check if item is a sub-test
    if (t.isSubTest && t.parentName) {
      if (isProfileSelected(t.parentName)) {
        // Full profile already selected - return
        return;
      }
      toggleItem(t);
      return;
    }

    // 3. Regular test
    toggleItem(t);
  };

  const toggleItem = (t: FlatTest) => {
    setCart((prev) =>
      prev.some((c) => c.name === t.name)
        ? prev.filter((c) => c.name !== t.name)
        : [...prev, t],
    );
  };

  const confirmReplaceProfile = () => {
    if (!pendingProfile) return;
    const group = PROFILE_GROUPS.find((g) => g.parentName === pendingProfile.name);
    const subNames = group ? group.subTests.map((s) => s.name) : [];
    setCart((prev) => [
      ...prev.filter((c) => !subNames.includes(c.name) && c.name !== pendingProfile.name),
      { ...pendingProfile, isProfile: true },
    ]);
    setPendingProfile(null);
  };

  const clearCart = () => setCart([]);

  const totalKnown = cart.reduce((sum, t) => sum + (t.price ?? 0), 0);
  const hasUnknown = cart.some((t) => t.price === null);

  const inquiryLink = useMemo(() => {
    if (!cart.length) return "#";
    const lines = cart
      .map((t, i) => `${i + 1}. ${t.name} - ${priceLabel(t.price)}`)
      .join("\n");
    const totalLine = hasUnknown
      ? `Total Estimated: ₹${totalKnown.toLocaleString("en-IN")} + items marked "Contact for Price"`
      : `Total Estimated: ₹${totalKnown.toLocaleString("en-IN")}`;
    const msg = `Hi, I want to inquire about the following tests at ${LAB.name}, Karjat:\n\n${lines}\n\n${totalLine}\n\nPlease confirm availability and appointment.`;
    return wa(msg);
  }, [cart, totalKnown, hasUnknown]);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-[#EAF4FB]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            Diagnostic Tests & Services in Karjat
          </h2>
          <p className="mt-4 text-navy/70">
            500+ tests across every major diagnostic category. Search or browse by category,
            select multiple tests and send us your inquiry in one click.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 mx-auto max-w-2xl relative">
          <div className="flex items-center gap-2 rounded-full bg-card border border-border shadow-med px-5 py-3">
            <Search className="h-5 w-5 text-navy/60" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowSuggest(true); }}
              onFocus={() => setShowSuggest(true)}
              onBlur={() => setTimeout(() => setShowSuggest(false), 200)}
              placeholder="Search for a test... (e.g., CBC, Thyroid, Sugar, SGPT, Cholesterol)"
              className="flex-1 bg-transparent text-sm md:text-base text-navy focus:outline-none placeholder:text-navy/50"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-navy/50 hover:text-navy"
              >
                Clear
              </button>
            )}
          </div>

          <AnimatePresence>
            {showSuggest && query.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-card border border-border shadow-med overflow-hidden z-30 max-h-96 overflow-y-auto"
              >
                {suggestions.length === 0 ? (
                  <div className="px-5 py-4 text-sm text-navy/60">
                    No tests found for "{query}". Try another keyword.
                  </div>
                ) : (
                  suggestions.map((t) => {
                    const parentSel = t.isSubTest && t.parentName ? isProfileSelected(t.parentName) : false;
                    const selected = inCart(t.name) || parentSel;
                    return (
                      <button
                        key={`${t.categoryId}-${t.name}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleTestClick(t)}
                        disabled={parentSel}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-teal/5 transition ${
                          selected ? "bg-teal/10" : ""
                        } ${parentSel ? "opacity-75 cursor-not-allowed" : ""}`}
                      >
                        <span
                          className={`h-5 w-5 rounded border flex items-center justify-center shrink-0 ${
                            selected
                              ? "bg-teal border-teal text-white"
                              : "border-navy/30 bg-white"
                          }`}
                        >
                          {selected && <Check className="h-3.5 w-3.5" />}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-navy truncate">{t.name}</span>
                            {t.isProfile && (
                              <span className="text-[10px] uppercase font-bold bg-teal/15 text-teal px-1.5 py-0.5 rounded">
                                Profile
                              </span>
                            )}
                            {t.isSubTest && (
                              <span className="text-[10px] uppercase font-bold bg-navy/10 text-navy/70 px-1.5 py-0.5 rounded">
                                Sub-test
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-navy/60">
                            {t.isSubTest && t.parentName
                              ? `Part of ${t.parentName}`
                              : t.category}
                            {parentSel && " · Full profile already selected"}
                          </div>
                        </div>
                        <div className="text-sm font-mono font-semibold text-navy shrink-0">
                          {priceLabel(t.price)}
                        </div>
                      </button>
                    );
                  })
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => {
            const isOpen = openCat === c.id;
            const selectedCount = c.tests.filter((t) => inCart(t.name)).length;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative rounded-3xl bg-card border border-border p-6 shadow-soft hover:shadow-med transition-all overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal/10 group-hover:bg-teal/20 transition" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{c.icon}</div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-navy/5 text-navy text-xs font-semibold px-3 py-1">
                        {c.tests.length} tests
                      </span>
                      {selectedCount > 0 && (
                        <span className="rounded-full gradient-cta text-white text-xs font-bold px-3 py-1">
                          {selectedCount} selected
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-display font-semibold text-navy">{c.title}</h3>
                  <p className="mt-1 text-sm text-navy/60">{c.short}</p>

                  <button
                    onClick={() => setOpenCat(isOpen ? null : c.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-green-med transition"
                  >
                    {isOpen ? "Hide tests" : "Browse & select tests"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-2 overflow-hidden"
                      >
                        {c.tests.map((t) => {
                          const flat: FlatTest = { ...t, category: c.title, categoryId: c.id };
                          const profileGroup = PROFILE_GROUPS.find((g) => g.parentName === t.name);

                          // Standard non-profile test
                          if (!profileGroup) {
                            const selected = inCart(t.name);
                            return (
                              <div key={t.name}>
                                <button
                                  onClick={() => handleTestClick(flat)}
                                  className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                                    selected
                                      ? "bg-teal/10 text-navy"
                                      : "hover:bg-teal/5 text-navy/80"
                                  }`}
                                >
                                  <span
                                    className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                                      selected
                                        ? "bg-teal border-teal text-white"
                                        : "border-navy/30 bg-white"
                                    }`}
                                  >
                                    {selected && <Check className="h-3 w-3" />}
                                  </span>
                                  <span className="min-w-0 flex-1 text-sm truncate">{t.name}</span>
                                  <span className="shrink-0 text-xs font-mono font-semibold text-navy/80">
                                    {priceLabel(t.price)}
                                  </span>
                                </button>
                              </div>
                            );
                          }

                          // Accordion Profile Test (Lipid, LFT, KFT/RFT)
                          const isProfSel = isProfileSelected(t.name);
                          const subOpen = !!openSubTests[t.name];
                          const selectedSubTests = getSelectedSubTestsOfProfile(t.name);

                          return (
                            <div
                              key={t.name}
                              className="rounded-xl border border-teal/20 bg-teal/5 p-3 space-y-2"
                            >
                              {/* Parent Profile Card Header */}
                              <div className="flex items-center justify-between gap-2">
                                <button
                                  onClick={() => handleTestClick({ ...flat, isProfile: true })}
                                  className="flex-1 flex items-center gap-3 text-left"
                                >
                                  <span
                                    className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                                      isProfSel
                                        ? "bg-teal border-teal text-white"
                                        : "border-navy/30 bg-white"
                                    }`}
                                  >
                                    {isProfSel && <Check className="h-3 w-3" />}
                                  </span>
                                  <span className="text-sm font-semibold text-navy">
                                    {t.name}
                                  </span>
                                </button>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="text-xs font-mono font-bold text-navy">
                                    {priceLabel(t.price)}
                                  </span>
                                  <button
                                    onClick={() => toggleSubTestAccordion(t.name)}
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:text-navy bg-white px-2.5 py-1 rounded-full border border-teal/30 transition"
                                  >
                                    <span>{subOpen ? "Hide" : "View Sub-Tests"}</span>
                                    <ChevronDown className={`h-3 w-3 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                                  </button>
                                </div>
                              </div>

                              {/* Accordion Sub-tests List */}
                              <AnimatePresence initial={false}>
                                {subOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden pt-2 border-t border-teal/15 space-y-1.5"
                                  >
                                    {profileGroup.subTests.map((st) => {
                                      const subFlat: FlatTest = {
                                        name: st.name,
                                        price: st.price,
                                        category: c.title,
                                        categoryId: c.id,
                                        isSubTest: true,
                                        parentName: t.name,
                                        parentPrice: t.price ?? 0,
                                      };
                                      const isSubSel = inCart(st.name);
                                      const disabledByParent = isProfSel;

                                      return (
                                        <button
                                          key={st.name}
                                          disabled={disabledByParent}
                                          onClick={() => handleTestClick(subFlat)}
                                          className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-1.5 text-left text-xs transition ${
                                            disabledByParent
                                              ? "bg-white/50 text-navy/50 cursor-not-allowed"
                                              : isSubSel
                                              ? "bg-teal/15 text-navy font-semibold"
                                              : "bg-white hover:bg-teal/10 text-navy/80"
                                          }`}
                                        >
                                          <div className="flex items-center gap-2 min-w-0">
                                            <span
                                              className={`h-3.5 w-3.5 rounded border flex items-center justify-center shrink-0 ${
                                                disabledByParent || isSubSel
                                                  ? "bg-teal border-teal text-white"
                                                  : "border-navy/30 bg-white"
                                              }`}
                                            >
                                              {(disabledByParent || isSubSel) && <Check className="h-2.5 w-2.5" />}
                                            </span>
                                            <span className="truncate">{st.name}</span>
                                          </div>
                                          <div className="flex items-center gap-2 shrink-0">
                                            {disabledByParent && (
                                              <span className="text-[10px] text-teal font-medium">
                                                Full profile selected
                                              </span>
                                            )}
                                            <span className="font-mono font-semibold">
                                              {priceLabel(st.price)}
                                            </span>
                                          </div>
                                        </button>
                                      );
                                    })}
                                    <div className="text-[11px] text-navy/60 italic pt-1">
                                      Select full profile or choose individual sub-tests as needed.
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-navy/70">Can't find your test?</p>
          <a
            href={wa(`Hi ${LAB.name}, I couldn't find a specific test on your website. Can you help?`)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full gradient-cta text-white font-semibold px-6 py-3 shadow-glow hover:scale-[1.03] transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp us — we'll check for you
          </a>
        </div>
      </div>

      {/* Confirmation Modal when selecting profile with sub-tests already selected */}
      <AnimatePresence>
        {pendingProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-med text-navy"
            >
              <div className="flex items-center gap-2 text-teal">
                <AlertCircle className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold">Replace Individual Sub-Tests?</h3>
              </div>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                You have already selected individual sub-tests from{" "}
                <span className="font-semibold text-navy">{pendingProfile.name}</span>. Do you
                want to replace them with the full profile?
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={confirmReplaceProfile}
                  className="flex-1 rounded-full gradient-cta text-white font-semibold py-2.5 px-4 text-sm shadow-glow hover:scale-[1.02] transition"
                >
                  Replace with Full Profile
                </button>
                <button
                  onClick={() => setPendingProfile(null)}
                  className="rounded-full border border-border bg-muted text-navy font-semibold py-2.5 px-4 text-sm hover:bg-navy/10 transition"
                >
                  Keep Individual Tests
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating cart bar */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed left-1/2 -translate-x-1/2 bottom-20 lg:bottom-6 z-40 w-[95vw] max-w-3xl rounded-3xl bg-card border border-border shadow-med overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 md:px-5 py-3 border-b border-border bg-navy text-white">
              <Plus className="h-4 w-4 text-teal" />
              <div className="flex-1">
                <div className="text-sm md:text-base font-display font-semibold">
                  {cart.length} Item{cart.length > 1 ? "s" : ""} Selected
                </div>
                <div className="text-xs text-white/70">
                  Estimated total: <span className="font-mono font-semibold text-teal">₹{totalKnown.toLocaleString("en-IN")}</span>
                  {hasUnknown && <span className="ml-1">+ items marked "Contact for Price"</span>}
                </div>
              </div>
              <button
                onClick={clearCart}
                className="hidden sm:inline-flex items-center gap-1 text-xs text-white/70 hover:text-white"
              >
                <Trash2 className="h-3.5 w-3.5" /> Clear All
              </button>
            </div>
            <div className="max-h-40 overflow-y-auto px-4 md:px-5 py-3">
              <ul className="flex flex-wrap gap-2">
                {cart.map((t) => (
                  <li
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full bg-teal/10 text-navy text-xs font-semibold pl-3 pr-1 py-1"
                  >
                    <span className="max-w-[220px] truncate">{t.name}</span>
                    <span className="font-mono text-navy/70">{priceLabel(t.price)}</span>
                    <button
                      onClick={() => handleTestClick(t)}
                      aria-label={`Remove ${t.name}`}
                      className="h-5 w-5 rounded-full bg-navy/10 hover:bg-navy/20 grid place-items-center text-navy"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 px-4 md:px-5 py-3 border-t border-border bg-muted">
              <button
                onClick={clearCart}
                className="sm:hidden text-xs text-navy/70 font-semibold px-3 py-2"
              >
                Clear
              </button>
              <a
                href={inquiryLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full gradient-cta text-white text-sm md:text-base font-semibold px-5 py-3 shadow-glow hover:scale-[1.02] transition"
              >
                <MessageCircle className="h-4 w-4" />
                Send Inquiry on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
