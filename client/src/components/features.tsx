import { motion } from "framer-motion";
import { Cloud, Building2, Award, Users, TrendingUp, Zap, BookOpen, Target, Briefcase } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Mock Interview",
    duration: "60 min",
    description: "Real interview simulation with detailed feedback on your answers, communication style, and executive presence.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Resume Review",
    duration: "45 min",
    description: "Strategic positioning of your experience to highlight leadership impact and P&L-level results.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Career Strategy",
    duration: "60 min",
    description: "Navigate your path from IC to Director/VP with actionable roadmaps and positioning advice.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "System Design",
    duration: "90 min",
    description: "Executive-level system design prep focused on business trade-offs, not just technical details.",
    color: "from-orange-500 to-red-500"
  }
];

const skills = [
  { category: "Executive Coaching", items: ["Director/VP Interview Prep", "Leadership Principles", "Executive Presence", "Stakeholder Communication", "Behavioral Interviews"] },
  { category: "System Design", items: ["Executive-Level Trade-offs", "Multi-Year Roadmaps", "Org-Level Impact", "Business Alignment", "Bar Raiser Perspective"] },
  { category: "Technical Depth", items: ["AWS Architecture", "Cloud Strategy", "Microservices", "Distributed Systems", "Enterprise Patterns"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            How I Can Help You
          </h2>
          <p className="text-slate-400 text-lg">
            I don't do generic coaching. I focus on what actually works in real FAANG interviews at Director/VP level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/80"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">{service.duration}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold font-display text-white mb-4">Core Expertise</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <h3 className="text-lg font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-display text-white">Certifications & Credentials</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 text-center">AWS Certified Solutions Architect</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3 p-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 text-center">Google Cloud Professional Architect</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3 p-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 text-center">Microsoft Azure Certified</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3 p-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 text-center">ISB Executive CTO Scholar</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
