import { motion } from "framer-motion";
import samples from "@/assets/samples.jpg";

const steps = [
  { n: "01", i: "📅", t: "Book your test", d: "Choose a test or package and book on WhatsApp or walk in." },
  { n: "02", i: "🩸", t: "Sample collection", d: "Visit our lab or opt for home collection. Safe, hygienic & precise." },
  { n: "03", i: "🔬", t: "Lab analysis", d: "Analysed on modern automated equipment by our expert team." },
  { n: "04", i: "📄", t: "Get reports", d: "Reports delivered same-day via WhatsApp, email or in-person." },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal/30 to-green-med/30 blur-2xl" />
          <img
            src={samples}
            alt="Meher Clinical Laboratory near Government Hospital Karjat"
            width={1400}
            height={1000}
            loading="lazy"
            className="relative rounded-[2rem] shadow-med w-full object-cover"
          />
        </motion.div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            How It Works
          </h2>

          <div className="mt-10 space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-med transition"
              >
                <div className="relative shrink-0">
                  <div className="h-14 w-14 rounded-2xl gradient-cta grid place-items-center text-white text-xl shadow-glow">
                    {s.i}
                  </div>
                  <span className="absolute -top-1 -right-1 rounded-full bg-navy text-white text-[10px] font-mono font-bold px-1.5 py-0.5">
                    {s.n}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-navy">{s.t}</h3>
                  <p className="text-sm text-navy/65 mt-1">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
