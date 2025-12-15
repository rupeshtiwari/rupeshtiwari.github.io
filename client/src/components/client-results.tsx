import { motion } from "framer-motion";
import { TrendingUp, Building2, Star, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const clientResults = [
  {
    name: "Vaughn",
    role: "Software Engineer",
    company: "DraftKings",
    story: "I had a great experience working with Rupesh! He helped me approach object-oriented design interview problems with structure, confidence, and competency. His patience stood out. He took the time to ensure I fully understood each concept before moving on.",
    outcome: "Landed role at DraftKings",
    date: "Apr 2025",
  },
  {
    name: "Ashley",
    role: "FAANG Interview Prep",
    company: "Phone Screen Passed",
    story: "Rupesh was so helpful! I passed my phone screen and will work with him to prep for my loop now. He helped me tighten up my interview answers, and identified gaps where I was missing metrics, mechanisms and other elements.",
    outcome: "Passed phone screen, preparing for loop",
    date: "Dec 2025",
  },
  {
    name: "Andre",
    role: "Solutions Architect",
    company: "Amazon Interview",
    story: "I had a prep session with Rupesh for my Amazon interview. His experience as an Amazon Solutions Architect shows in his coaching. Rupesh gave clear feedback on my technical answers and communication style, spotting weaknesses I missed.",
    outcome: "Interview-ready for Amazon",
    date: "May 2025",
  },
  {
    name: "Melvin",
    role: "Solutions Architect",
    company: "Career Transition",
    story: "As a beginning Solutions Architect, I was stuck in my career, and he provided guidance for sharpening my skills, demonstrating competence, building my brand, and engaging with other cloud professionals and recruiters. By the end of the session, I had a 90-day step-by-step plan to turn my career around.",
    outcome: "90-day career transformation plan",
    date: "Apr 2025",
  },
  {
    name: "Muhammad",
    role: "Solutions Architect",
    company: "Technical Interview",
    story: "Rupesh quickly identified the areas I needed to focus on and tailored the session specifically for the Solution Architect role I'm targeting. He coached me on how to structure and communicate my design decisions clearly and confidently. In just one hour, I gained a clear picture of my strengths and the areas I need to refine.",
    outcome: "Clear interview strategy",
    date: "Jul 2025",
  },
  {
    name: "Shamir",
    role: "Data Engineer",
    company: "Interview Coaching",
    story: "He coached me technically, and also on how I approach a question, how I should answer each question that suits the role I'm applying for, and how my tone and body language should be while answering. Now I know my strengths and weaknesses properly. All of these in a single hour of interview.",
    outcome: "Complete interview readiness",
    date: "Oct 2024",
  },
];

const companyLogos = [
  { name: "Google", bg: "bg-white" },
  { name: "Amazon", bg: "bg-[#FF9900]" },
  { name: "Meta", bg: "bg-[#0668E1]" },
  { name: "Microsoft", bg: "bg-[#00A4EF]" },
  { name: "Apple", bg: "bg-white" },
  { name: "Netflix", bg: "bg-[#E50914]" },
];

function AnimatedStat({ end, suffix, prefix, label, Icon }: { 
  end: number; 
  suffix?: string; 
  prefix?: string; 
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, displayValue } = useCounterAnimation({
    end,
    duration: 2000,
    prefix: prefix || "",
    suffix: suffix || "",
  });

  return (
    <div ref={ref} className="p-6 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 text-center">
      <Icon className="w-6 h-6 text-[var(--theme-gold)] mx-auto mb-2" />
      <div className="text-2xl md:text-3xl font-bold text-[var(--theme-text-primary)]">{displayValue}</div>
      <div className="text-sm text-[var(--theme-text-muted)]">{label}</div>
    </div>
  );
}

function AnimatedStatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      <AnimatedStat end={20} suffix="+" label="Years in Tech" Icon={TrendingUp} />
      <AnimatedStat end={50} suffix="+" label="Clients Coached" Icon={Building2} />
      <AnimatedStat end={5} prefix="" suffix=".0" label="Average Rating" Icon={Star} />
      <AnimatedStat end={50} suffix="+" label="Verified Reviews" Icon={CheckCircle2} />
    </motion.div>
  );
}

export default function ClientResults() {
  return (
    <section id="results" className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--theme-gold)]/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--theme-gold)] text-sm font-semibold uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            Real Clients. Real Results. Verified Reviews.
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
            Every story below is from a real coaching client with a verified review on IGotAnOffer.
          </p>
        </motion.div>

        <AnimatedStatsBar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-center text-[var(--theme-text-muted)] text-sm mb-6">Helping leaders land offers at:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {companyLogos.map((company, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 rounded-lg bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/30 flex items-center gap-2"
              >
                <div className={`w-3 h-3 rounded-full ${company.bg}`} />
                <span className="text-[var(--theme-text-primary)] font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clientResults.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-[var(--theme-gold)]/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[var(--theme-text-primary)]">{client.name}</h3>
                  <p className="text-[var(--theme-text-muted)] text-sm">{client.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 text-[var(--theme-gold)] fill-[var(--theme-gold)]" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--theme-gold)]/10 border border-[var(--theme-gold)]/20 text-[var(--theme-gold)] text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  {client.outcome}
                </span>
              </div>

              <div className="relative">
                <Quote className="w-4 h-4 text-[var(--theme-gold)]/30 absolute -top-1 -left-1" />
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed pl-4">
                  {client.story}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--theme-border)]/30 flex justify-between items-center">
                <span className="text-xs text-[var(--theme-text-muted)]">{client.date}</span>
                <span className="text-xs text-[var(--theme-text-muted)]">Verified on IGotAnOffer</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[var(--theme-gold)]/10 to-[var(--theme-gold)]/5 border border-[var(--theme-gold)]/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[var(--theme-gold)]" />
              <span className="text-[var(--theme-text-primary)] font-medium">Your success story could be next</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-[var(--theme-gold)] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
              asChild
              data-testid="button-results-cta"
            >
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                Book Your Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
