import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { LAB, wa } from "@/lib/lab-data";

export function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString() || "";
    const phone = fd.get("phone")?.toString() || "";
    const test = fd.get("test")?.toString() || "";
    const msg = fd.get("message")?.toString() || "";
    const text = `Hi ${LAB.name},%0A%0AName: ${name}%0APhone: ${phone}%0AInterested in: ${test}%0AMessage: ${msg}`;
    window.open(`https://wa.me/${LAB.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-[#EAF4FB]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-navy tracking-tight">
            Contact Meher Clinical Laboratory Karjat
          </h2>
          <p className="mt-4 text-navy/70">
            Have a question or want to book a test? We're just a WhatsApp away.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Name</span>
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-navy focus:border-teal focus:ring-2 focus:ring-teal/20 focus:outline-none"
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Phone</span>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-navy focus:border-teal focus:ring-2 focus:ring-teal/20 focus:outline-none"
                  placeholder="+91 ..."
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Test / Package</span>
              <input
                name="test"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-navy focus:border-teal focus:ring-2 focus:ring-teal/20 focus:outline-none"
                placeholder="e.g. Full Body Checkup, Thyroid Profile…"
              />
            </label>
            <label className="mt-4 block">
              <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Message</span>
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-navy focus:border-teal focus:ring-2 focus:ring-teal/20 focus:outline-none"
                placeholder="Anything else we should know?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cta text-white font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>
          </motion.form>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-navy p-6 md:p-8 text-white shadow-med relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal/25 blur-2xl" />
              <h3 className="font-display text-2xl font-semibold">Visit our lab</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-teal shrink-0" />
                  <span>{LAB.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-teal shrink-0" />
                  <a href={`tel:${LAB.phoneRaw}`} className="hover:text-teal">{LAB.phone}</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-teal shrink-0" />
                  <a
                    href={wa("Hi, I'd like to inquire about tests at Meher Clinical Laboratory.")}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal"
                  >
                    WhatsApp: {LAB.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-teal shrink-0" />
                  <a href={`mailto:${LAB.email}`} className="hover:text-teal break-all">{LAB.email}</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-teal shrink-0" />
                  <span>{LAB.hours}</span>
                </li>
              </ul>
              <a
                href={LAB.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-navy font-semibold px-5 py-2.5 hover:bg-teal hover:text-white transition"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-border">
              <iframe
                title="Meher Clinical Laboratory location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d73.3251!3d18.9106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb9b3d47f821%3A0x78fe20d514748872!2sMeher%20Clinical%20Laboratory!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
