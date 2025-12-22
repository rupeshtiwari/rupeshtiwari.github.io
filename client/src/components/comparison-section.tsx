import { motion } from "framer-motion";
import { Check, X, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = {
  selfPrep: {
    title: "Self-Preparation",
    icon: "📚",
    items: [
      { text: "Generic YouTube videos", positive: false },
      { text: "No personalized feedback", positive: false },
      { text: "Months of trial and error", positive: false },
      { text: "Unclear what companies want", positive: false },
      { text: "Weak negotiation skills", positive: false },
      { text: "High rejection rate", positive: false },
      { text: "Leave money on the table", positive: false },
    ]
  },
  coaching: {
    title: "1:1 Coaching with Rupesh",
    icon: "🎯",
    items: [
      { text: "Personalized FAANG strategy", positive: true },
      { text: "Real-time mock interviews", positive: true },
      { text: "6-12 weeks structured program", positive: true },
      { text: "Insider knowledge from Google/AWS", positive: true },
      { text: "Negotiation scripts that add $40K+", positive: true },
      { text: "92% success rate", positive: true },
      { text: "Average $285K salary increase", positive: true },
    ]
  }
};

const stats = [
  { selfPrep: "3-6 months", coaching: "6-12 weeks", label: "Time to offer" },
  { selfPrep: "~30%", coaching: "92%", label: "Success rate" },
  { selfPrep: "$0", coaching: "+$40K", label: "Negotiation gains" },
  { selfPrep: "Unknown", coaching: "$285K avg", label: "Salary increase" },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-[var(--theme-bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why Coaching?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            Self-Prep vs Professional Coaching
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
            Most people waste months preparing the wrong way. Here's why coaching 
            delivers faster, better results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{comparisonData.selfPrep.icon}</span>
              <h3 className="text-xl font-bold text-[var(--theme-text-muted)]">{comparisonData.selfPrep.title}</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.selfPrep.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--theme-text-muted)]">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 dark:from-green-500/10 dark:to-emerald-500/10 dark:border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{comparisonData.coaching.icon}</span>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{comparisonData.coaching.title}</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.coaching.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--theme-text-primary)]">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)] text-center">
              <div className="text-sm text-[var(--theme-text-muted)] mb-2">{stat.label}</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[var(--theme-text-muted)] text-sm line-through">{stat.selfPrep}</span>
                <ArrowRight className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-green-600 dark:text-green-400 font-bold">{stat.coaching}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-[var(--theme-gold)]/10 to-yellow-500/10 border border-[var(--theme-gold)]/20">
            <p className="text-[var(--theme-text-primary)] text-lg mb-4">
              Stop wasting time on generic prep. Get a <span className="text-[var(--theme-gold)] font-bold">personalized strategy</span> that works.
            </p>
            <Button 
              className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 hover:from-[#E5C158] hover:to-yellow-400 text-slate-900 font-bold"
              asChild
              data-testid="button-comparison-cta"
            >
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Strategy Session
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
