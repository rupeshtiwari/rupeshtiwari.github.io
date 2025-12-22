import { motion } from "framer-motion";
import { Sparkles, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const gumroadUrl = "https://rupeshtiwari.gumroad.com/l/rupesh-kit";

  return (
    <section id="newsletter" className="py-16 bg-[var(--theme-bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--theme-gold)]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-gold)]/10 border border-[var(--theme-gold)]/20 text-[var(--theme-gold)] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Free Resources
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-[var(--theme-text-primary)] mb-2">
                Get My Complete Interview Kit
              </h2>
              <p className="text-[var(--theme-text-muted)]">
                Join 2,000+ engineers who downloaded my free FAANG interview preparation resources.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-slate-900 font-bold"
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

            <p className="text-xs text-[var(--theme-text-muted)] text-center mt-4">
              Free forever. Includes PDF guides, templates, and cheatsheets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
