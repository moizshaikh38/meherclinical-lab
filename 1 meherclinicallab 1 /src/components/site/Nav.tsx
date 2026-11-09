import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { LAB, wa } from "@/lib/lab-data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#home-collection", label: "Home Collection" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-navy text-white text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5 opacity-90">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {LAB.phone}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Karjat, Maharashtra</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> Open 8 AM – 9 PM · All 7 Days</span>
          </div>
          <span className="opacity-90">23+ Years of trust</span>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-0" : "md:top-8 top-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-full glass shadow-soft"
              : "max-w-7xl mx-4 md:mx-auto rounded-2xl glass shadow-soft mt-2"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-teal/30 blur-md group-hover:blur-lg transition" />
                <img
                  src={LAB.logo}
                  alt="Meher Clinical Laboratory logo"
                  className="relative h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-soft"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-navy text-[15px] md:text-base">
                  Meher Clinical Laboratory
                </div>
                <div className="text-[10px] md:text-[11px] text-muted-foreground uppercase tracking-widest">
                  Karjat · Since 2002
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-3 py-2 text-sm font-medium text-navy/80 hover:text-navy transition-colors after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-right after:scale-x-0 after:bg-gradient-to-r after:from-teal after:to-green-med after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <a
                href={`tel:${LAB.phoneRaw}`}
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition"
              >
                <Phone className="h-4 w-4" /> {LAB.phone}
              </a>
              <a
                href={wa(`Hi ${LAB.name}, I'd like to book a test.`)}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center rounded-full gradient-cta text-white text-sm font-semibold px-5 py-2.5 shadow-glow hover:scale-[1.03] transition-transform"
              >
                <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                Book Now
              </a>
              <button
                aria-label="Open menu"
                className="lg:hidden ml-1 rounded-lg p-2 text-navy hover:bg-navy/5"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <img src={LAB.logo} alt="" className="h-10 w-10 rounded-full ring-2 ring-white/40" />
                <span className="text-white font-display font-semibold">Meher Lab</span>
              </div>
              <button
                aria-label="Close menu"
                className="rounded-lg p-2 text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="px-6 pt-6 flex flex-col gap-2"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="text-3xl font-display font-semibold text-white/95 py-3 border-b border-white/10"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={wa("Hi, I'd like to book a test at Meher Clinical Laboratory.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex justify-center items-center rounded-full gradient-cta text-white font-semibold px-6 py-4"
              >
                Book on WhatsApp
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
