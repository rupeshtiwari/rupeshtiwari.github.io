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
        <div className="container mx-auto px-2 py-2 md:py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3 text-[#0A1628] flex-1 min-w-0">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 animate-bounce flex-shrink-0" />
              <span className="font-semibold text-xs md:text-base truncate">
                Crack Your FAANG Interview!
              </span>
              <span className="hidden lg:inline text-sm">
                Join 1000+ engineers at fullstackmaster.net
              </span>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                size="sm"
                className="bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-semibold px-2 md:px-4 text-xs md:text-sm h-7 md:h-8"
                asChild
                data-testid="button-banner-cta"
              >
                <a href="https://fullstackmaster.net" target="_blank" rel="noopener noreferrer">
                  <span className="hidden sm:inline">Start Now</span>
                  <span className="sm:hidden">Go</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                </a>
              </Button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-[#0A1628] bg-white/40 hover:bg-white/60 rounded-full p-1.5 transition-colors flex-shrink-0"
                data-testid="button-close-banner"
                title="Close banner"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
