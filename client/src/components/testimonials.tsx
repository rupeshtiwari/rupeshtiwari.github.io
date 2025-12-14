import { motion } from "framer-motion";
import { Quote, Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ashley",
    role: "Phone Screen Passed",
    company: "FAANG Loop Prep",
    text: "Rupesh was so helpful! I passed my phone screen and will work with him to prep for my loop now. He helped me tighten up my interview answers, and identified gaps where I was missing metrics, mechanisms and other elements.",
    initials: "A",
    gotOffer: true,
    date: "Dec 2025",
    color: "from-[#1E40AF] to-[#1D4ED8]"
  },
  {
    name: "Vaughn",
    role: "Software Engineer",
    company: "DraftKings",
    text: "THANK YOU RUPESH!!! I landed a role at DraftKings after Rupesh's coaching session. He helped me approach object-oriented design interview problems with structure, confidence, and competency.",
    initials: "V",
    gotOffer: true,
    date: "Apr 2025",
    color: "from-[#C9A227] to-[#D4AF37]"
  },
  {
    name: "Melvin",
    role: "Solutions Architect",
    company: "Cloud Career",
    text: "As a beginning Solutions Architect, I was stuck in my career. Rupesh provided guidance for sharpening my skills, building my brand, and engaging with recruiters. By the end, I had a 90-day step-by-step plan to turn my career around.",
    initials: "M",
    gotOffer: true,
    date: "Apr 2025",
    color: "from-[#D4AF37] to-[#E5C158]"
  },
  {
    name: "Muhammad",
    role: "Solutions Architect",
    company: "Senior Role",
    text: "Rupesh quickly identified the areas I needed to focus on. He coached me on how to structure and communicate my design decisions clearly. In just one hour, I gained a clear picture of my strengths and areas to refine.",
    initials: "M",
    gotOffer: false,
    date: "Jul 2025",
    color: "from-[#1D4ED8] to-[#2563EB]"
  },
  {
    name: "Shamir",
    role: "Data Engineer",
    company: "Interview Prep",
    text: "He coached me on how I approach a question, how I should answer for the role I'm applying for, and how my tone and body language should be. Now I know my strengths and weaknesses properly. All in a single hour!",
    initials: "S",
    gotOffer: false,
    date: "Oct 2024",
    color: "from-[#1E40AF] to-[#1D4ED8]"
  },
  {
    name: "Andre",
    role: "Solutions Architect",
    company: "Amazon",
    text: "I had a prep session with Rupesh for my Amazon interview. His experience as an Amazon Solutions Architect shows. He gave clear feedback on my technical answers and communication style, spotting weaknesses I missed.",
    initials: "A",
    gotOffer: true,
    date: "May 2025",
    color: "from-[#C9A227] to-[#D4AF37]"
  },
  {
    name: "Aman",
    role: "System Design",
    company: "Interview Prep",
    text: "Prior to our session, I was intimidated by thoughts of my upcoming interview. Rupesh has given me a solid framework which I can use to be confident in my questions/answers. I highly recommend a learning session with Rupesh!",
    initials: "AM",
    gotOffer: false,
    date: "Jul 2025",
    color: "from-[#D4AF37] to-[#E5C158]"
  },
  {
    name: "Ann",
    role: "Solutions Architect",
    company: "Databricks",
    text: "He holds a very high bar and treats each mock interview as seriously as if it were his own team's hiring process. I'm currently preparing for a Solutions Architect role and he made sure I left with a clear framework.",
    initials: "AN",
    gotOffer: false,
    date: "Jul 2025",
    color: "from-[#1D4ED8] to-[#2563EB]"
  },
  {
    name: "Michael",
    role: "Technical Interview",
    company: "Coaching Session",
    text: "He walked me through the interview process and provided detailed resources for both technical and behavioral parts. We had a short mock and he pointed out areas to improve. I gained a clear interview strategy!",
    initials: "MI",
    gotOffer: false,
    date: "Jan 2025",
    color: "from-[#1E40AF] to-[#1D4ED8]"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--theme-navy)]/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--theme-gold)] text-sm font-semibold uppercase tracking-wider">50+ Verified Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            Real Stories from Real Clients
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
            Every review verified on IGotAnOffer. These are actual coaching clients who transformed their interview game.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-[var(--theme-bg-card)]/80 border border-[var(--theme-border)] hover:border-[var(--theme-gold)]/30 transition-all hover:bg-[var(--theme-bg-card)] hover:shadow-xl hover:shadow-[var(--theme-gold)]/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <span className="text-white text-lg font-bold">{item.initials}</span>
                    </div>
                    <div>
                      <div className="font-bold text-[var(--theme-text-primary)]">{item.name}</div>
                      <div className="text-sm text-[var(--theme-text-muted)]">{item.role}</div>
                    </div>
                  </div>
                  {item.gotOffer && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Success
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[var(--theme-gold)] fill-[var(--theme-gold)]" />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--theme-text-muted)]">{item.date}</span>
                </div>
                
                <p className="text-[var(--theme-text-secondary)] leading-relaxed text-sm">
                  "{item.text}"
                </p>
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
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[var(--theme-gold)] fill-[var(--theme-gold)]" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[var(--theme-text-primary)] font-bold text-xl">5.0 Average Rating</div>
              <div className="text-[var(--theme-text-muted)]">50+ Verified Reviews on IGotAnOffer</div>
            </div>
            <Button variant="outline" className="border-[var(--theme-gold)]/30 text-[var(--theme-gold)] hover:bg-[var(--theme-gold)]/10 sm:ml-4" asChild>
              <a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer">
                Verify All Reviews <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
