import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does coaching typically take?",
    answer: "Most clients complete the Interview Prep Sprint in 4 weeks or the Executive Fast Track in 8 weeks. However, I customize the timeline based on your target interview dates and current readiness level. If you have an interview in 2 weeks, we can do an intensive sprint.",
  },
  {
    question: "What if I don't get an offer after coaching?",
    answer: "My success rate is 92%, but interviews have variables outside our control. If you complete the program and don't receive an offer, I offer a follow-up session at no additional cost to debrief and prepare for your next opportunity. Your success is my priority.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! I offer a 100% satisfaction guarantee. If after your first session you feel this isn't the right fit, I'll refund your payment in full, no questions asked. I want you to feel confident in your investment.",
  },
  {
    question: "What companies do your clients typically target?",
    answer: "Most of my clients target FAANG companies (Google, Amazon, Meta, Apple, Netflix), Microsoft, and high-growth startups. I also coach for Director and VP roles at Fortune 500 companies. The frameworks I teach work across all top tech companies.",
  },
  {
    question: "Is coaching worth it if I'm already a strong engineer?",
    answer: "Absolutely. Strong engineers often struggle most in senior interviews because the bar is different. You're not just evaluated on technical skills, but on leadership, communication, and strategic thinking. My coaching bridges that gap.",
  },
  {
    question: "How are sessions conducted?",
    answer: "All sessions are conducted via Zoom. You'll receive a calendar invite with the meeting link. Sessions are recorded so you can review them later. I also provide detailed written feedback after each session.",
  },
  {
    question: "Can you help with salary negotiation?",
    answer: "Yes! Salary negotiation is included in all my packages. I've helped clients add $50K-$150K to their offers using proven negotiation scripts and strategies. This often pays for the entire coaching investment many times over.",
  },
  {
    question: "What's the difference between your programs?",
    answer: "Single Session ($199) is a one-time 60-minute session, great for specific feedback. Interview Prep Sprint ($699) is a 4-week program for comprehensive preparation. Executive Fast Track ($1,299) is my premium 8-week program with priority support and bonus sessions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[var(--theme-bg-card)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--theme-gold)]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-gold)]/10 border border-[var(--theme-gold)]/20 text-[var(--theme-gold)] text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-[var(--theme-text-primary)]">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
            Everything you need to know about working with me. Can't find your answer? Book a free discovery call.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-[var(--theme-border)]/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left bg-[var(--theme-bg-secondary)]/50 hover:bg-[var(--theme-bg-secondary)]/80 transition-colors"
                data-testid={`faq-question-${idx}`}
              >
                <span className="text-[var(--theme-text-primary)] font-medium pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--theme-gold)] shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-5 pt-0 bg-[var(--theme-bg-secondary)]/30"
                >
                  <p className="text-[var(--theme-text-muted)] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
