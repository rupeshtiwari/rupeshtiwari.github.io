import { motion } from "framer-motion";
import { Sparkles, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const gumroadUrl = "https://rupeshtiwari.gumroad.com/l/rupesh-kit";

  return (
    <section id="newsletter" className="py-16 bg-[#0F2341] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#0F2341] border border-[#1E3A5F]">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#D4AF37] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Free Resources
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                Get My Complete Interview Kit
              </h2>
              <p className="text-slate-400">
                Join 2,000+ engineers who downloaded my free FAANG interview preparation resources.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
                asChild
                data-testid="button-newsletter-gumroad"
              >
                <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get Free Kit on Gumroad
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-slate-500 text-center mt-4">
              Free forever. Includes PDF guides, templates, and cheatsheets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
