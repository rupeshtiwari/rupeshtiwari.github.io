import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Crown, 
  CheckCircle2, 
  Calendar,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Briefcase
} from "lucide-react";

const programs = [
  {
    id: "emerging",
    icon: Rocket,
    title: "Emerging Director",
    subtitle: "For Senior Engineers & Managers (30-40)",
    price: "Custom",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "Break into your first Director or Principal Engineer role at a top tech company.",
    idealFor: [
      "Senior Engineers (L5-L6) ready for leadership",
      "Engineering Managers seeking Director title",
      "Tech Leads wanting exec-level impact",
    ],
    includes: [
      "Leadership Principles Deep Dive",
      "Behavioral Interview Mastery",
      "System Design for Leaders",
      "Resume & LinkedIn Transformation",
      "Mock Interview Sessions",
      "Offer Negotiation Strategy",
    ],
    outcome: "Land your first Director/Principal role with $150K+ comp increase",
  },
  {
    id: "executive",
    icon: Crown,
    title: "Executive Accelerator",
    subtitle: "For Directors & Senior Leaders (40+)",
    price: "Premium",
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    popular: true,
    description: "Navigate VP and Senior Director interviews with executive presence and strategic thinking.",
    idealFor: [
      "Directors aiming for VP/SVP roles",
      "VPs transitioning to new companies",
      "Senior leaders targeting FAANG exec roles",
    ],
    includes: [
      "Executive Presence Coaching",
      "VP-Level Behavioral Framework",
      "Organizational Design Interviews",
      "Executive Communication Mastery",
      "Board-Level Presentation Skills",
      "C-Suite Stakeholder Management",
    ],
    outcome: "Secure VP/Senior Director offers with $250K+ comp increase",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Signature Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Choose Your Leadership Path
          </h2>
          <p className="text-slate-400 text-lg">
            Two focused programs designed for where you are in your career journey. Both include personalized 1:1 coaching, not generic advice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl ${program.bgColor} border ${program.borderColor} hover:border-opacity-60 transition-all`}
            >
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-xs font-bold text-slate-900">
                  MOST POPULAR
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shrink-0`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  <p className="text-slate-400 text-sm">{program.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6">{program.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Ideal For</h4>
                <ul className="space-y-2">
                  {program.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Target className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">What's Included</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {program.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-6">
                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">{program.outcome}</span>
                </div>
              </div>

              <Button 
                className={`w-full h-12 text-base font-semibold ${program.popular ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                asChild
              >
                <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Discovery Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">
            Not sure which program is right for you?{" "}
            <a 
              href="https://wa.me/919951622992?text=Hi%20Rupesh%2C%20I%27d%20like%20to%20discuss%20which%20coaching%20program%20is%20right%20for%20me." 
              className="text-amber-400 hover:text-amber-300 underline"
            >
              Let's chat on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
