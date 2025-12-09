import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Serverless", "Terraform"] },
  { category: "Frontend", items: ["Angular", "React", "TypeScript", "RxJS", "NgRX", "Redux", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Microservices", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"] },
  { category: "Architecture", items: ["Domain-Driven Design", "Event-Driven", "SOA", "Clean Architecture", "System Design"] },
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
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive technology stack built over 17+ years of experience in enterprise software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
