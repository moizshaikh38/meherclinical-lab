import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import { LAB, wa } from "@/lib/lab-data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroLab}
        alt="Blood test at Meher Clinical Laboratory near Government Hospital Karjat"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-green-med/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex self-start items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs md:text-sm text-white/95 font-medium"
        >
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          Karjat's Trusted Diagnostic Lab · Since 2002
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight"
        >
          Meher Clinical Laboratory —{" "}
          <span className="bg-gradient-to-r from-teal to-white bg-clip-text text-transparent">
            Karjat's Most Trusted Diagnostic Centre Since 2002
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/85"
        >
          Karjat's most trusted clinical laboratory — serving families with precision,
          affordability & warmth for over 23 years. 500+ tests, same day reports
          and home sample collection across the Karjat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={wa(`Hi ${LAB.name}, I'd like to book a test. Please share the details.`)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-glow hover:shadow-[0_0_60px_rgba(0,191,166,0.55)] transition-all"
          >
            Book a Test
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-white/15 transition"
          >
            View Health Packages
          </a>
        </motion.div>

        {/* Search bar */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          onSubmit={(e) => {
            e.preventDefault();
            const q = new FormData(e.currentTarget).get("q")?.toString() || "";
            window.dispatchEvent(new CustomEvent("lab:search", { detail: q }));
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 flex max-w-xl items-center gap-2 rounded-full glass p-1.5 pl-5"
        >
          <Search className="h-4 w-4 text-navy/60" />
          <input
            name="q"
            required
            placeholder="Search for a test — e.g. CBC, Thyroid, Vitamin D…"
            className="flex-1 bg-transparent py-2 text-sm text-navy placeholder:text-navy/50 focus:outline-none"
          />
          <button className="rounded-full bg-navy text-white text-sm font-semibold px-5 py-2.5 hover:bg-navy-light transition">
            Search & Select
          </button>
        </motion.form>
      </div>
    </section>
  );
}
