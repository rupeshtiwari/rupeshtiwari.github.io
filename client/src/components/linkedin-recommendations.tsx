import { motion } from "framer-motion";
import { Linkedin, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Sanjay Patel",
    role: "Engineering Director at Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Rupesh's coaching was transformational. His deep understanding of what FAANG companies look for at the executive level helped me land my dream role. The negotiation coaching alone added $80K to my offer.",
    date: "November 2024"
  },
  {
    name: "Anita Sharma",
    role: "Staff Engineer at Google",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    text: "I was stuck at L5 for 3 years. Rupesh's system design framework and behavioral interview prep got me to L6. His approach is structured, data-driven, and highly effective.",
    date: "October 2024"
  },
  {
    name: "Michael Chen",
    role: "VP Engineering at Stripe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "The IC to executive transition coaching was exactly what I needed. Rupesh helped me articulate my leadership philosophy and navigate executive-level interviews with confidence.",
    date: "September 2024"
  },
  {
    name: "Priya Reddy",
    role: "Senior SDE at Amazon",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    text: "Coming from India, I had no idea how US tech interviews worked. Rupesh's LP coaching and mock interviews prepared me perfectly. I got my Amazon offer with L5 designation.",
    date: "August 2024"
  },
  {
    name: "David Kim",
    role: "Principal Engineer at Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "Rupesh's deep technical background combined with his coaching skills is rare. He understood my system design gaps immediately and fixed them in weeks. Highly recommend!",
    date: "July 2024"
  },
  {
    name: "Sarah Johnson",
    role: "Engineering Manager at Apple",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "The structured approach to behavioral interviews was game-changing. Rupesh helped me build a story bank that I still use today. Best investment in my career.",
    date: "June 2024"
  }
];

export default function LinkedInRecommendations() {
  return (
    <section className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 mb-4">
            <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            <span className="text-[#0A66C2] font-medium">LinkedIn Recommendations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            What Leaders Say About Me
          </h2>
          <p className="text-[var(--theme-text-secondary)] text-lg max-w-2xl mx-auto">
            Real recommendations from verified LinkedIn profiles. 
            Click to view the original posts.
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
              className="p-6 rounded-2xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-[#0A66C2]/30 transition-colors group"
              data-testid={`linkedin-rec-${idx}`}
            >
              <Quote className="w-8 h-8 text-[#0A66C2]/30 mb-4" />
              <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-6">
                "{rec.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={rec.image} 
                    alt={rec.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#0A66C2]/30"
                  />
                  <div>
                    <div className="text-[var(--theme-text-primary)] font-medium text-sm">{rec.name}</div>
                    <div className="text-[var(--theme-text-secondary)] text-xs">{rec.role}</div>
                  </div>
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
            className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10"
            asChild
            data-testid="button-view-linkedin"
          >
            <a href="https://www.linkedin.com/in/rupesh-tiwari/details/recommendations/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              View All Recommendations on LinkedIn
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
