import { motion } from "framer-motion";
import { LAB } from "@/lib/lab-data";

const highlights = [
  { emoji: "🎯", title: "Precision & Accuracy" },
  { emoji: "⚡", title: "Same-Day Reports" },
  { emoji: "💰", title: "Affordable Pricing" },
  { emoji: "🏠", title: "Home Sample Collection" },
  { emoji: "👨‍⚕️", title: "Expert Technologist" },
  { emoji: "🕐", title: "Open 6 Days a Week" },
];

const timeline = [
  { y: "2002", t: "Founded in Karjat" },
  { y: "2005", t: "5,000+ Patients Milestone" },
  { y: "2010", t: "Advanced analyzers added" },
  { y: "2015", t: "Home collection launched" },
  { y: "2020", t: "Digital WhatsApp reports" },
  { y: "2025", t: "50,000+ Patients Served" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        {/* Left: Pathologist */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal/40 to-green-med/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-med">
              <img
                src={LAB.pathologistPhoto}
                alt="Mr Abid Khan B.Sc. ADMLT Founder Meher Clinical Laboratory Karjat"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-navy/95 to-transparent">
                <div className="text-white font-display font-semibold text-lg">
                  {LAB.pathologistName}
                </div>
                <div className="text-white/85 text-xs uppercase tracking-widest mt-0.5">
                  {LAB.qualification} · Founder & Technologist
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-teal font-semibold">
              About Us
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
              23 years of trust,{" "}
              <span className="gradient-text">one patient at a time.</span>
            </h2>
            <div className="mt-6 space-y-4 text-navy/70 leading-relaxed">
              <p>
                Meher Clinical Laboratory has been Karjat's most trusted diagnostic
                centre since 2002. Founded by <b>{LAB.pathologistName}</b> ({LAB.qualification})
                our lab is equipped with state of the art technology and follows strict
                quality protocols to deliver accurate and timely diagnostic results.
              </p>
              <p>
                Over 23 years, we have earned the trust of thousands of families in
                Karjat and surrounding areas. Our commitment to precision, affordability
                and patient care makes us the preferred choice for all diagnostic needs.
              </p>
              <p>
                We believe that accurate diagnostics are the foundation of better healthcare.
                That's why we invest in advanced diagnostic technology, ensure all equipment is
                calibrated daily, follow standardized operating procedures and maintain strict quality
                control so that every report meets the highest standards of accuracy and reliability.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-med hover:-translate-y-1 transition-all"
              >
                <div className="text-2xl">{h.emoji}</div>
                <div className="mt-2 text-sm font-semibold text-navy">{h.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-12">
            <h3 className="text-lg font-display font-semibold text-navy">Our journey</h3>
            <div className="mt-5 relative pl-6 border-l-2 border-dashed border-teal/40 space-y-5">
              {timeline.map((it, i) => (
                <motion.div
                  key={it.y}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full gradient-cta ring-4 ring-background" />
                  <div className="font-mono text-teal font-bold">{it.y}</div>
                  <div className="text-navy/80">{it.t}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
