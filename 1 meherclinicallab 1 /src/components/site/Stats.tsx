import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 23, suffix: "+", label: "Years of Experience", icon: "🏆" },
  { value: 50000, suffix: "+", label: "Patients Served", icon: "👨‍👩‍👧" },
  { value: 500, suffix: "+", label: "Tests Available", icon: "🔬" },
  { value: 15000, suffix: "+", label: "Reports Delivered / Year", icon: "📄" },
  { value: 100, suffix: "%", label: "Accurate Results", icon: "🎯" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-mono tabular-nums">
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-14 px-4">
      <div className="mx-auto max-w-7xl rounded-3xl gradient-brand p-6 md:p-8 shadow-med overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-center text-white"
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-bold font-display leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/75 uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
