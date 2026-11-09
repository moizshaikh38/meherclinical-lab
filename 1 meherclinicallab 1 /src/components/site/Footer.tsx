import { Facebook, Instagram, MessageCircle, Clock, Phone, MapPin, Mail } from "lucide-react";
import { LAB, wa } from "@/lib/lab-data";

const quick = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Home Collection", "#home-collection"],
  ["Contact", "#contact"],
];

const popular = [
  "CBC",
  "Thyroid Profile",
  "Blood Sugar / HbA1c",
  "Lipid Profile",
  "Vitamin D",
  "Full Body Checkup",
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LAB.logo}
              alt="Meher Clinical Laboratory Logo Karjat"
              className="h-11 w-11 rounded-full ring-2 ring-white/40 object-cover"
            />
            <div>
              <div className="font-display font-semibold text-white">Meher Clinical Laboratory</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">Karjat · Since 2002</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Karjat's most trusted diagnostic laboratory — 23+ years of accurate,
            affordable and caring pathology services.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={wa("Hi Meher Lab")} target="_blank" rel="noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal transition">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-teal transition">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Popular Tests</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {popular.map((t) => (
              <li key={t}>
                <a
                  href={wa(`Hi, I want to inquire about ${t} at ${LAB.name}, Karjat.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal transition"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-teal shrink-0" />{LAB.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-teal shrink-0" />
              <a href={`tel:${LAB.phoneRaw}`} className="hover:text-teal">{LAB.phone}</a>
            </li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-teal shrink-0" />
              <a href={`mailto:${LAB.email}`} className="hover:text-teal break-all">{LAB.email}</a>
            </li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-teal shrink-0" />{LAB.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2">
          <span>© 2002–{new Date().getFullYear()} Meher Clinical Laboratory, Karjat. All rights reserved.</span>
          <span>Made with ❤️ for better healthcare.</span>
        </div>
      </div>

      {/* Local SEO paragraph */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-[11px] leading-relaxed text-white/40">
            Meher Clinical Laboratory is Karjat's most trusted pathology and diagnostic centre,
            conveniently located at Shop 8, Samarth Building, Near Government Hospital, Karjat,
            Maharashtra 410201. Serving patients from Karjat and nearby 5km radius, we provide
            accurate and affordable blood tests, health checkup packages and home sample collection
            services. Founded in 2002, we are committed to delivering precise diagnostic results
            with same day reporting. Call us at +91 9422666178 or WhatsApp us to book your test today.
          </p>
        </div>
      </div>

      {/* Visually-hidden geo content for crawlers */}
      <div className="visually-hidden" aria-hidden="true">
        <p>Meher Clinical Laboratory is located at Shop 8, Samarth Building, Near Government Hospital, Karjat, Maharashtra 410201, India.</p>
        <p>We serve patients from Karjat and nearby 5km radius area.</p>
        <p>Contact us at +91 9422666178 or email meherclinicallab@gmail.com</p>
        <p>Open 6 days a week from 8:00 AM to 9:00 PM.</p>
        <p>Services: Blood Test Karjat, Pathology Lab Karjat, Diagnostic Centre Karjat, Home Sample Collection Karjat, Health Checkup Karjat, CBC Test Karjat, Thyroid Test Karjat, Sugar Test Karjat, Lipid Profile Karjat, Fever Test Karjat, Dengue Test Karjat</p>
      </div>
    </footer>
  );
}
