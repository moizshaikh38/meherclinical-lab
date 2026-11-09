import { motion } from "framer-motion";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

const LAB_PARTNERS = [
  { name: "Metropolis Healthcare", tag: "Reputed & Accredited" },
  { name: "Agilus Diagnostics", tag: "Reputed & Accredited" },
  { name: "Thyrocare", tag: "Reputed & Accredited" },
  { name: "GD Diagnostics", tag: "Reputed & Accredited" },
];

const TRUST_BADGES = [
  "Reputed & Accredited Labs",
  "Patient Preference Respected",
  "Timely Reporting",
  "Reliable Specialized Testing",
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#F0F7FF] to-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            Trusted Reference Laboratories
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/75 leading-relaxed">
            To maintain the highest standards of diagnostic accuracy, certain specialized
            tests may be referred to reputed and accredited reference laboratories based on
            the patient's preference, ensuring accurate, reliable and timely reporting.
          </p>
        </motion.div>

        {/* 4 Brand Cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {LAB_PARTNERS.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-[12px] border border-[#E5EDF5] bg-card p-6 text-center shadow-soft hover:shadow-med hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center"
            >
              <div className="h-12 w-12 rounded-full bg-[#0A2647]/5 grid place-items-center text-[#0A2647] group-hover:bg-teal/10 group-hover:text-teal transition-colors">
                <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
              </div>
              <h3 className="mt-4 font-display font-bold text-[16px] text-navy">
                {lab.name}
              </h3>
              <span className="mt-1 text-[12px] text-navy/60 font-medium">
                {lab.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Referral note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-1.5 text-xs md:text-sm text-navy/65 italic text-center"
        >
          <Info className="h-4 w-4 text-teal shrink-0 not-italic" />
          <span>Patient preference and test availability guide the referral process.</span>
        </motion.div>

        {/* Inline trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] font-medium text-[#2E8B57]"
        >
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2E8B57]" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
