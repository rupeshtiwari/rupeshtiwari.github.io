import { motion } from "framer-motion";
import { Cloud, Building2, Award, Target, BookOpen, Briefcase, Zap, MessageSquare, FileText, Presentation } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Behavioral Interviews",
    description: "Master the STAR method for executive-level stories. Learn to showcase leadership impact, not just technical wins.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "System Design",
    description: "Executive-level system design focusing on business trade-offs, org impact, and multi-year roadmaps, not just technical diagrams.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Presentation,
    title: "Executive Presence",
    description: "Develop the communication style, body language, and confidence that FAANG interviewers expect from Director+ candidates.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: FileText,
    title: "Resume & LinkedIn",
    description: "Transform your resume from IC-focused to executive-ready. Highlight P&L impact, team building, and strategic initiatives.",
    color: "from-green-500 to-emerald-500"
  }
];

const expertise = [
  { 
    category: "Interview Preparation", 
    items: ["Director/VP Behavioral", "Leadership Principles", "Executive Presence", "Bar Raiser Interviews", "Stakeholder Stories"] 
  },
  { 
    category: "System Design & Strategy", 
    items: ["Exec-Level Trade-offs", "Org Design Discussions", "Multi-Year Roadmaps", "Business Alignment", "Technical Vision"] 
  },
  { 
    category: "Communication Mastery", 
    items: ["Executive Storytelling", "Concise Communication", "Handling Pushback", "Influence Without Authority", "Board Presentations"] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--theme-gold)] text-sm font-semibold uppercase tracking-wider">What I Coach</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            The 4 Pillars of Executive Interviews
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg">
            These are the areas where senior ICs consistently underperform. I'll help you master each one.
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
              className="group p-6 rounded-2xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)] hover:border-[var(--theme-gold)]/30 transition-all hover:shadow-lg"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--theme-text-primary)] mb-2">{service.title}</h3>
              <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold font-display text-[var(--theme-text-primary)] mb-4">Deep Expertise Areas</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertise.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]"
            >
              <h3 className="text-lg font-bold mb-4 text-[var(--theme-gold)]">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-sm rounded-full bg-[var(--theme-bg-secondary)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)] p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-display text-[var(--theme-text-primary)]">My Credentials</h3>
            <p className="text-[var(--theme-text-muted)] mt-2">I don't just teach interviews. I've passed them at the highest levels.</p>
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
              <span className="text-sm font-medium text-[var(--theme-text-secondary)] text-center">AWS Senior CSM</span>
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
              <span className="text-sm font-medium text-[var(--theme-text-secondary)] text-center">Google Cloud Certified</span>
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
              <span className="text-sm font-medium text-[var(--theme-text-secondary)] text-center">Microsoft Certified</span>
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
              <span className="text-sm font-medium text-[var(--theme-text-secondary)] text-center">ISB CTO Scholar</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
