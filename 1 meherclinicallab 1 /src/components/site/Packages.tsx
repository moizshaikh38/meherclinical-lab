import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { PACKAGES, LAB, wa } from "@/lib/lab-data";

export function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Health Packages
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            Health Checkup Packages in Karjat
          </h2>
          <p className="mt-4 text-navy/70">
            Prevention is better than cure. Choose a package that fits your life book instantly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((p, i) => {
            const highlight = p.badge === "Most Popular";
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative rounded-3xl p-[1.5px] transition-all ${
                  highlight
                    ? "gradient-cta shadow-glow"
                    : "bg-gradient-to-br from-navy/10 to-teal/10"
                } hover:-translate-y-1.5 hover:shadow-med`}
              >
                <div className="relative h-full rounded-[calc(1.5rem-1.5px)] bg-card p-7 flex flex-col overflow-hidden">
                  {p.badge && (
                    <span
                      className={`absolute top-4 right-4 rounded-full text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${
                        highlight ? "gradient-cta" : "bg-navy"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div className="h-10 flex items-center">
                    {p.id === "fever" ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="none"
                        stroke="#FF6B35"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:scale-110"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
                      >
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                        <path d="M12 9v4" />
                      </svg>
                    ) : p.id === "cancer-female" ? (
                      <svg
                        viewBox="0 0 64 64"
                        width="28"
                        height="28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-200 group-hover:scale-110"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
                      >
                        <path
                          d="M32 2C26.5 2 21.5 5.5 19 10.5C16.5 15.5 16 21 18 26C20 31 23.5 35 27 39L24 48L20 58H28L32 48L36 58H44L40 48L37 39C40.5 35 44 31 46 26C48 21 47.5 15.5 45 10.5C42.5 5.5 37.5 2 32 2Z"
                          fill="#FF4D8D"
                        />
                      </svg>
                    ) : p.id === "cancer-male" ? (
                      <svg
                        viewBox="0 0 64 64"
                        width="28"
                        height="28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-200 group-hover:scale-110"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
                      >
                        <path
                          d="M32 2C26.5 2 21.5 5.5 19 10.5C16.5 15.5 16 21 18 26C20 31 23.5 35 27 39L24 48L20 58H28L32 48L36 58H44L40 48L37 39C40.5 35 44 31 46 26C48 21 47.5 15.5 45 10.5C42.5 5.5 37.5 2 32 2Z"
                          fill="#2F80ED"
                        />
                      </svg>
                    ) : (
                      <span className="text-4xl">{p.emoji}</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-display font-semibold text-navy">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs text-navy/60 uppercase tracking-widest">
                    {p.best}
                  </p>

                  <div className="mt-4">
                    <div className="text-lg font-display font-semibold gradient-text">
                      Contact for Package Price
                    </div>
                    <div className="text-xs text-navy/50 mt-0.5">
                      {p.tests.length} tests included
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 flex-1">
                    {p.tests.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-navy/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={wa(
                      `Hi, I want to book ${p.name} package at ${LAB.name}, Karjat.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex justify-center items-center gap-2 rounded-full font-semibold px-5 py-3 transition ${
                      highlight
                        ? "gradient-cta text-white shadow-glow hover:scale-[1.02]"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-navy/70">Need a custom package? We'll create one for you.</p>
          <a
            href={wa(`Hi ${LAB.name}, I'd like a custom health package. Please help.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card text-navy font-semibold px-6 py-3 hover:bg-navy hover:text-white transition"
          >
            Request Custom Package
          </a>
        </div>
      </div>
    </section>
  );
}
