import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import awsCert from "@assets/stock_images/aws_certified_soluti_c0bb2c85.jpg";
import msCert from "@assets/stock_images/microsoft_certified__b19e0041.jpg";
import isbCert from "@assets/stock_images/isb_institute_logo_c31af089.jpg";

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
           <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                 <img src={awsCert} alt="AWS Certified Solutions Architect" className="h-24 w-auto mix-blend-multiply" />
                 <span className="text-sm font-semibold text-muted-foreground">Solutions Architect Professional</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                 <img src={msCert} alt="Microsoft Certified" className="h-24 w-auto mix-blend-multiply" />
                 <span className="text-sm font-semibold text-muted-foreground">Azure Solutions Architect Expert</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                 <img src={isbCert} alt="ISB CTO Scholar" className="h-24 w-auto mix-blend-multiply" />
                 <span className="text-sm font-semibold text-muted-foreground">ISB CTO Scholar</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
