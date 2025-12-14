import { motion } from "framer-motion";
import { Clock, Users, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UrgencyBanner() {
  const spotsLeft = 3;
  const nextCohortDate = "January 2025";

  return (
    <section className="py-6 bg-[var(--theme-bg-secondary)] border-y border-[var(--theme-border)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center"
        >
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-left">
                <div className="text-[var(--theme-text-primary)] font-bold">Only {spotsLeft} Spots Left</div>
                <div className="text-xs text-[var(--theme-text-muted)]">This month</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-[var(--theme-gold)]/30" />
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--theme-gold)]/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[var(--theme-gold)]" />
              </div>
              <div className="text-left">
                <div className="text-[var(--theme-text-primary)] font-bold">Next Cohort: {nextCohortDate}</div>
                <div className="text-xs text-[var(--theme-text-muted)]">Executive Fast Track</div>
              </div>
            </div>
          </div>

          <Button 
            size="sm"
            className="bg-gradient-to-r from-[var(--theme-gold)] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
            asChild
            data-testid="button-urgency-book"
          >
            <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
              <Zap className="w-4 h-4 mr-1" />
              Claim Your Spot
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
