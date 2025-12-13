import { motion } from "framer-motion";
import { Search, Brain, Target, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    description: "Deep dive into your background, target roles, and gaps. We identify exactly what's holding you back from exec-level offers.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Brain,
    title: "Rewire",
    description: "Transform how you think about leadership. Shift from IC problem-solving to executive decision-making frameworks.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Target,
    title: "Rehearse",
    description: "Intensive mock interviews with real-time feedback. Practice until executive presence becomes second nature.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Close",
    description: "Navigate final rounds and negotiate offers. Optimize for total comp, not just base salary.",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">The Process</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            How I Transform Senior ICs Into Directors
          </h2>
          <p className="text-slate-400 text-lg">
            A proven 4-step methodology that's helped 50+ leaders land FAANG exec offers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-slate-700">{step.number}</span>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-slate-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">4-8 Weeks</div>
              <div className="text-slate-400 text-sm">Average Program Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">6-10 Sessions</div>
              <div className="text-slate-400 text-sm">1:1 Coaching Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">Unlimited</div>
              <div className="text-slate-400 text-sm">WhatsApp Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
