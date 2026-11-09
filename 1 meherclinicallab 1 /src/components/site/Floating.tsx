import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, ArrowUp, MessageCircle, Sparkles } from "lucide-react";
import { LAB, wa } from "@/lib/lab-data";

const WHATSAPP_URL =
  "https://wa.me/919422666178?text=Hi%2C%20I%20want%20to%20inquire%20about%20tests%20at%20Meher%20Clinical%20Laboratory%2C%20Karjat.";

export function Floating() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky action bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border">
        <div className="grid grid-cols-3 divide-x divide-border">
          <a href={`tel:${LAB.phoneRaw}`} className="flex flex-col items-center py-3 text-navy text-xs font-semibold">
            <Phone className="h-4 w-4 mb-1" /> Call
          </a>
          <a
            href={wa("Hi Meher Lab, I'd like to book a test.")}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center py-3 text-green-med text-xs font-semibold"
          >
            <MessageCircle className="h-4 w-4 mb-1" /> WhatsApp
          </a>
          <a href="#packages" className="flex flex-col items-center py-3 text-navy text-xs font-semibold">
            <Sparkles className="h-4 w-4 mb-1" /> Book Test
          </a>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 lg:bottom-28 left-4 lg:left-6 z-40 h-11 w-11 rounded-full bg-navy text-white shadow-med hover:bg-navy-light grid place-items-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-105 transition animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        <MessageCircle className="h-6 w-6 relative" />
        <span className="pointer-events-none hidden md:block absolute right-full mr-3 whitespace-nowrap bg-navy text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us on WhatsApp!
        </span>
      </a>
    </>
  );
}
