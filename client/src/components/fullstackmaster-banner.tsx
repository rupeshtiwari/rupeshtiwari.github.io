import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FullStackMasterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#E5C158] shadow-lg"
        data-testid="banner-fullstackmaster"
      >
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-4 relative">
          <div className="flex items-center gap-3 text-[#0A1628]">
            <Rocket className="w-5 h-5 animate-bounce" />
            <span className="font-semibold text-sm md:text-base">
              Crack Your FAANG Interview!
            </span>
            <span className="hidden md:inline text-sm">
              Join 1000+ engineers at fullstackmaster.net
            </span>
          </div>
          <Button
            size="sm"
            className="bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-semibold px-4"
            asChild
            data-testid="button-banner-cta"
          >
            <a href="https://fullstackmaster.net" target="_blank" rel="noopener noreferrer">
              Start Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-[#0A1628] hover:text-[#0A1628] bg-white/30 hover:bg-white/50 rounded-full p-1.5 transition-colors"
            data-testid="button-close-banner"
            title="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
