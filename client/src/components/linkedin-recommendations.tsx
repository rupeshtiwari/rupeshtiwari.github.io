import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Taras",
    focus: "Coaching Session",
    text: "The best coaching session that I had",
    date: "August 2025"
  },
  {
    name: "Abhishek",
    focus: "Technical Coaching",
    text: "Rupesh is amazing! He has extensive knowledge in technology and really helped me think at a higher level. His coaching has given me a framework to answer questions with numbers and always aim to raise the bar. Highly recommend him.",
    date: "August 2025"
  },
  {
    name: "Omotola",
    focus: "Learning Session",
    text: "Rupesh is patient, thorough, and a confidence-booster. I had an excellent experience learning from him!",
    date: "January 2025"
  },
  {
    name: "Bijan",
    focus: "TPM Interview Prep",
    text: "A fantastic call. I learned a huge amount of practical and valuable information. I now have a clear, structured plan towards my interviews.",
    date: "September 2025"
  },
  {
    name: "Ricardo",
    focus: "Data Engineering Roadmap",
    text: "Rupesh is great! He provided me with more information in one hour than I could ever get in weeks of research. I now have a 6 month roadmap to data engineering. Look forward to keep working with him.",
    date: "August 2025"
  },
  {
    name: "Aishwarya",
    focus: "Interview Confidence",
    text: "I loved the session with Rupesh. It has allowed me to gain a lot of confidence in a span of an hour. I got a structure on how to answer questions from him. Thank you sir!",
    date: "March 2025"
  }
];

export default function LinkedInRecommendations() {
  return (
    <section className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-4">
            <Star className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            What Clients Say
          </h2>
          <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto">
            Real feedback from verified coaching sessions on IGotAnOffer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-[#D4AF37]/30 transition-colors group"
              data-testid={`client-review-${idx}`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />
              <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-6">
                "{rec.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[var(--theme-text-primary)] font-medium text-sm">{rec.name}</div>
                  <div className="text-[var(--theme-text-secondary)] text-xs">{rec.focus}</div>
                </div>
                <div className="text-[var(--theme-text-muted)] text-xs">{rec.date}</div>
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
          <Button 
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            asChild
            data-testid="button-view-all-reviews"
          >
            <a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4 mr-2" />
              View All 50+ Reviews on IGotAnOffer
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
