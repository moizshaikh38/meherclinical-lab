import { motion } from "framer-motion";

const items = [
  { i: "🎯", t: "Accurate Results", d: "Advanced analyzers and strict SOPs ensure 100% dependable diagnostic reports." },
  { i: "⚡", t: "Same-Day Reports", d: "Most routine reports delivered the same day. Urgent reports within hours." },
  { i: "💰", t: "Affordable Pricing", d: "Quality diagnostics shouldn't be expensive. The most competitive rates in Karjat." },
  { i: "👨‍⚕️", t: "Expert Technologist", d: "Led by a B.Sc. ADMLT qualified Technologist with 23+ years of experience." },
  { i: "🏠", t: "Home Collection", d: "We'll come to your doorstep across the Karjat region for sample collection." },
  { i: "🕐", t: "Open 6 Days", d: "Every day 8 AM – 9 PM" },
  { i: "🔬", t: "Modern Equipment", d: "Fully automated analyzers for precise, reliable and reproducible results." },
  { i: "📱", t: "Digital Reports", d: "Get your reports conveniently on WhatsApp — no second visit required." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#EAF4FB] to-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            Why Choose Meher Clinical Laboratory
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-med hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-teal/10 group-hover:bg-teal/20 transition" />
              <div className="relative">
                <div className="text-3xl">{it.i}</div>
                <h3 className="mt-3 font-display font-semibold text-navy">{it.t}</h3>
                <p className="mt-1.5 text-sm text-navy/65 leading-relaxed">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
