import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { AREAS, LAB, wa } from "@/lib/lab-data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80";
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80";

const perks = [
  "Available across the entire Karjat area",
  "Trained & certified phlebotomists",
  "Hygienic, single-use collection kits",
  "Reports delivered via WhatsApp",
  "Morning slots (8 AM – 10 AM) for fasting tests",
  "Book effortlessly on WhatsApp",
];

const steps = [
  { n: "01", icon: "📱", t: "Send test details on WhatsApp" },
  { n: "02", icon: "🏠", t: "Our technician visits at your slot" },
  { n: "03", icon: "📄", t: "Receive reports on WhatsApp / email" },
];

export function HomeCollection() {
  return (
    <section
      id="home-collection"
      className="relative py-24 md:py-32 overflow-hidden isolate"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={HERO_IMG}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
          }}
          alt="Home sample collection service in Karjat by Meher Clinical Laboratory"
          loading="lazy"
          className="h-full w-full object-cover object-center animate-kenburns"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(10,38,71,0.6), rgba(10,38,71,0.7))",
          }}
        />
      </div>

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Home Sample Collection
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            🏠 Home Sample Collection in <span className="gradient-text">Karjat</span>
          </h2>
          <p className="mt-4 text-white/85 max-w-lg">
            Get your samples collected from the comfort of your home, anywhere in the
            Karjat region — quick, hygienic and hassle-free.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {steps.map((s) => (
              <div key={s.n} className="glass-dark rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{s.icon}</div>
                  <div className="font-mono text-teal text-sm">{s.n}</div>
                </div>
                <div className="mt-3 text-sm font-medium">{s.t}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-white/70">
            Serving: <span className="text-white/90">Karjat and nearby 5km</span>
          </div>
        </motion.div>

        {/* Right: glass booking card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal/40 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] p-8 md:p-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-med text-white">
            <div className="text-4xl">🏠</div>
            <h3 className="mt-4 text-2xl md:text-3xl font-display font-semibold">
              Book Home Collection
            </h3>
            <p className="mt-2 text-white/80 text-sm">
              Share your test list on WhatsApp and pick a convenient slot. Our
              trained phlebotomist reaches your doorstep. Samples collected safely,
              reports on WhatsApp.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={wa(
                  `Hi ${LAB.name}, I want to book Home Sample Collection in Karjat. Please share the details.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-7 py-4 text-white font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href={`tel:${LAB.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 px-7 py-4 text-white font-semibold transition"
              >
                <Phone className="h-4 w-4" /> Call {LAB.phone}
              </a>
            </div>

            <div className="mt-6 text-xs text-white/70 text-center">
              Morning slots · 8 AM – 10 AM
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
