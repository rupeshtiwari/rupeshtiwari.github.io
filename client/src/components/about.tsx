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
              Empowering Developers & <br />
              <span className="text-primary">Transforming Enterprises</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a <strong>Microsoft Certified Senior Software Architect</strong> and <strong>AWS Global Senior Solution Architect</strong> with over 17 years of industry experience.
              </p>
              <p>
                My passion lies in solving complex architectural challenges and making technology accessible to everyone. As the founder of <strong>FullstackMaster.net</strong>, I've helped thousands of developers bridge the gap between frontend and backend technologies.
              </p>
              <p>
                I specialize in designing scalable, resilient systems for the financial services sector, leveraging the power of cloud-native technologies.
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
              <h3 className="text-xl font-bold mb-4">Career Highlights</h3>
              <ul className="space-y-3">
                {[
                  "AWS Global Senior Solution Architect",
                  "Microsoft Certified Solution Architect",
                  "Pluralsight Author & Technical Trainer",
                  "Founder of FullstackMaster.net",
                  "17+ Years of IT Experience"
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
