import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Cloud, Building2, Award } from "lucide-react";

const skills = [
  { category: "Executive Leadership", items: ["Strategic Planning", "Digital Transformation", "Team Leadership", "Cloud Strategy", "Stakeholder Management"] },
  { category: "Cloud Architecture", items: ["AWS Solutions Architecture", "Azure Solutions", "Well-Architected Framework", "Serverless Computing", "Microservices"] },
  { category: "Modern Stack", items: ["Angular", "React", "Node.js", "TypeScript", "Event-Driven Design", "Domain-Driven Design (DDD)"] },
];

export default function Skills() {

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Core Competencies</h2>
          <p className="text-muted-foreground text-lg">
            Bridging the gap between executive strategy and technical execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge key={item} variant="secondary" className="px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-background border border-border rounded-xl p-8">
           <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display">Global Certifications & Recognitions</h3>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center gap-4">
                 <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Cloud className="w-10 h-10 md:w-12 md:h-12 text-orange-600" />
                 </div>
                 <span className="text-sm font-semibold text-muted-foreground text-center">AWS Solutions Architect Professional</span>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex flex-col items-center gap-4">
                 <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
                 </div>
                 <span className="text-sm font-semibold text-muted-foreground text-center">Azure Solutions Architect Expert</span>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex flex-col items-center gap-4">
                 <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-10 h-10 md:w-12 md:h-12 text-purple-600" />
                 </div>
                 <span className="text-sm font-semibold text-muted-foreground text-center">ISB CTO Scholar</span>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
