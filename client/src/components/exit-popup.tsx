import { motion, AnimatePresence } from "framer-motion";
import { X, Download, BookOpen, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const gumroadUrl = "https://rupeshtiwari.gumroad.com/l/rupesh-kit";

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("exitPopupSeen");
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible && !hasSeenPopup) {
        setIsVisible(true);
        sessionStorage.setItem("exitPopupSeen", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md p-8 rounded-2xl bg-[#0F2341] border border-[#1E3A5F] shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
              data-testid="button-close-popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Wait! Don't Leave Empty-Handed
              </h3>
              <p className="text-slate-400">
                Get my free interview kit that helped 50+ engineers crack FAANG interviews.
              </p>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              {[
                "The exact framework I used at Google, Microsoft & AWS",
                "5 behavioral questions every interviewer asks",
                "System design template that works anywhere",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>

            <Button 
              className="w-full h-12 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
              asChild
              data-testid="button-exit-popup-gumroad"
            >
              <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Get Free Kit
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <p className="text-xs text-slate-500 text-center mt-4">
              Free forever. No credit card required.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
