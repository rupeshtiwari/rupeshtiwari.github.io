import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const clientReviews = [
  {
    id: "vaughn",
    name: "Vaughn",
    outcome: "Landed role at DraftKings",
    date: "April 2025",
    focus: "Object-Oriented Design Interview Prep",
    reviews: [
      "I had a great experience working with Rupesh! He helped me approach object-oriented design interview problems with structure, confidence, and competency. His patience stood out. He took the time to ensure I fully understood each concept before moving on. I also appreciated how he provided clear next steps to continue improving my skills. Highly recommend him for anyone looking to strengthen their SWE interview prep!",
      "THANK YOU RUPESH!!!"
    ],
    highlights: ["OOD interview structure", "Patient coaching style", "Clear next steps"]
  },
  {
    id: "ashley",
    name: "Ashley",
    outcome: "Passed phone screen",
    date: "December 2025",
    focus: "Interview Answer Optimization",
    reviews: [
      "Rupesh was so helpful! I passed my phone screen and will work with him to prep for my loop now. He helped me tighten up my interview answers, and identified gaps where I was missing metrics, mechanisms and other elements. It was specific to the role and company so very tailored. And he's really nice and easy to work with."
    ],
    highlights: ["Tailored to specific role", "Metrics and mechanisms focus", "Phone screen success"]
  },
  {
    id: "ann",
    name: "Ann",
    outcome: "Solutions Architect at Databricks",
    date: "July-August 2025",
    focus: "Solutions Architect Panel Prep",
    reviews: [
      "This was my second time with Rupesh for mock interview! I had the opportunity to work with Rupesh to prepare for a panel session for a Solutions Architect role. Coming from a more technical background, I realized that the storytelling and communication aspect of the conversation needed more practice and refinement. Rupesh provided highly actionable feedback. He helped me improve the overall structure of the panel discussion, identify key focus areas, flag red flags, and even suggested thoughtful questions to ask during the session. He holds a very high bar and treats each mock interview as seriously as if it were his own team's hiring process.",
      "I'm currently preparing for a Solutions Architect role with a data background. Rupesh started the session by proposing a clear structure, which helped set the tone for a productive conversation - definitely five stars. What I truly appreciated was his thoughtful and caring approach. He made sure I left the session with a clear framework and practical guidance I can continue to practice on my own."
    ],
    highlights: ["Multiple sessions", "High bar standard", "Storytelling improvement", "Panel prep"]
  },
  {
    id: "ca",
    name: "Ca",
    outcome: "DevOps & AWS Cloud Expertise",
    date: "September 2025",
    focus: "Java, DevOps, Cloud (AWS), SRE Coaching",
    reviews: [
      "I took multiple sessions with Rupesh and have consistently been impressed by his deep expertise in DevOps and the AWS cloud domain. His background in development provides a solid foundation that enhances his ability to explain complex concepts clearly and effectively. He is genuinely passionate about his work and goes above and beyond to support his students, often adjusting his schedule to accommodate individual needs. He takes the time to ensure your queries are thoroughly addressed and is always willing to provide guidance. This is not just a one-time engagement for him; he brings a long-term mentorship mindset to his coaching. I highly recommend him for coaching in Java, DevOps, Cloud (AWS), and SRE domains."
    ],
    highlights: ["Multiple sessions", "Long-term mentorship", "DevOps & AWS expertise", "Flexible scheduling"]
  },
  {
    id: "melvin",
    name: "Melvin",
    outcome: "90-day career roadmap",
    date: "April 2025",
    focus: "Solutions Architect Career Transition",
    reviews: [
      "Rupesh was amazing to work with. As a beginning Solutions Architect, I was stuck in my career, and he provided guidance for sharpening my skills, demonstrating competence, building my brand, and engaging with other cloud professionals and recruiters. By the end of the session, I had a 90-day step-by-step plan to turn my career around. I'll be coming back to him again for mock interviews in the next month or so!"
    ],
    highlights: ["90-day action plan", "Career guidance", "Brand building", "Recruiter engagement"]
  },
  {
    id: "muhammad",
    name: "Muhammad",
    outcome: "Solutions Architect Interview Ready",
    date: "July 2025",
    focus: "System Design & Architecture Interviews",
    reviews: [
      "I had my first mock interview session with Rupesh, and it was extremely insightful. He quickly identified the areas I needed to focus on and tailored the session specifically for the Solution Architect role I'm targeting. Rupesh brings deep experience in system design and architecture interviews, and it really showed. He not only reviewed my technical approach, but also coached me on how to structure and communicate my design decisions clearly and confidently. He emphasized how to align my answers with the business context of the role, and gave actionable feedback on my tone and overall presence. In just one hour, I gained a clear picture of my strengths and the areas I need to refine. I highly recommend Rupesh for anyone preparing for Solution Architect or system design interviews."
    ],
    highlights: ["System design expertise", "Business context alignment", "Communication coaching", "Presence improvement"]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-primary)] text-[var(--theme-text-primary)]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="block text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">50+ Five-Star Reviews</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-[var(--theme-text-primary)]">
              Real Client Success Stories
            </h1>
            <p className="text-[var(--theme-text-secondary)] text-lg max-w-3xl mx-auto">
              These are verified reviews from actual coaching clients on IGotAnOffer. 
              Read their experiences and outcomes in their own words.
            </p>
          </motion.div>

          <div className="space-y-12">
            {clientReviews.map((client, idx) => (
              <motion.article
                key={client.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="relative"
                data-testid={`client-review-${client.id}`}
              >
                <div className="p-8 rounded-2xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2">{client.name}</h3>
                      <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-3">
                        {client.outcome}
                      </div>
                      <p className="text-[var(--theme-text-secondary)] text-sm mb-4">{client.date}</p>
                      <p className="text-blue-400 text-sm font-medium mb-4">{client.focus}</p>
                      
                      <div className="space-y-2">
                        {client.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-sm text-[var(--theme-text-secondary)]">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                      {client.reviews.map((review, rIdx) => (
                        <div key={rIdx} className="relative">
                          <Quote className="absolute -left-2 -top-2 w-8 h-8 text-[#D4AF37]/20" />
                          <blockquote className="pl-6 text-[var(--theme-text-secondary)] leading-relaxed italic">
                            "{review}"
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[var(--theme-gold)]/10 to-[var(--theme-gold)]/5 border border-[var(--theme-gold)]/20 text-center"
          >
            <h3 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-4">
              View All 50+ Reviews
            </h3>
            <p className="text-[var(--theme-text-secondary)] mb-6 max-w-2xl mx-auto">
              These are just a few highlights. See all verified reviews on IGotAnOffer to learn 
              how coaching has helped professionals land roles at top tech companies.
            </p>
            <Button 
              className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold"
              asChild
              data-testid="button-view-all-reviews"
            >
              <a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer">
                View All Reviews on IGotAnOffer
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2">Ready to Start Your Journey?</h3>
              <p className="text-[var(--theme-text-secondary)] mb-6">
                Join 50+ successful clients who have transformed their careers with personalized coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold"
                  asChild
                  data-testid="button-case-studies-cta"
                >
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Strategy Call
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-[var(--theme-border)] text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-card)]"
                  asChild
                >
                  <Link href="/pricing">
                    View Coaching Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
