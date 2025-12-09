import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Tech Strategy Leader & <br />
              <span className="text-primary">Cloud Innovator</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a <strong>Tech Strategy Leader at AWS</strong> and an <strong>ISB CTO Scholar</strong>, driven by a passion for innovation and long-term architectural impact.
              </p>
              <p>
                With over 17 years of experience, I focus on thoughtful design and strategic business alignment rather than quick fixes. I have driven innovation in internal processes, system design approaches, and the adoption of cutting-edge frameworks.
              </p>
              <p>
                Beyond corporate leadership, I am deeply committed to mentoring. As the founder of <strong>FullstackMaster.net</strong>, I empower developers to bridge the gap between code and architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Professional Milestones</h3>
              <ul className="space-y-3">
                {[
                  "Tech Strategy Leader @ AWS",
                  "ISB CTO Scholar",
                  "Microsoft Certified Solution Architect",
                  "Former Lead at Strasz Assessment Systems",
                  "Founder of FullstackMaster.net",
                  "Mentor & Pluralsight Author"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
