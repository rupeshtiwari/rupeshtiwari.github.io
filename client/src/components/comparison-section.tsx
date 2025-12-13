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
    <section className="py-24 bg-gradient-to-b from-slate-950 to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Why Coaching?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Self-Prep vs Professional Coaching
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most people waste months preparing the wrong way. Here's why coaching 
            delivers faster, better results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{comparisonData.selfPrep.icon}</span>
              <h3 className="text-xl font-bold text-slate-400">{comparisonData.selfPrep.title}</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.selfPrep.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{comparisonData.coaching.icon}</span>
              <h3 className="text-xl font-bold text-green-400">{comparisonData.coaching.title}</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.coaching.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white">{item.text}</span>
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
            <div key={idx} className="p-4 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 text-center">
              <div className="text-sm text-slate-500 mb-2">{stat.label}</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-slate-400 text-sm line-through">{stat.selfPrep}</span>
                <ArrowRight className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-bold">{stat.coaching}</span>
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
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-yellow-500/10 border border-[#D4AF37]/20">
            <p className="text-white text-lg mb-4">
              Stop wasting time on generic prep. Get a <span className="text-[#D4AF37] font-bold">personalized strategy</span> that works.
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
