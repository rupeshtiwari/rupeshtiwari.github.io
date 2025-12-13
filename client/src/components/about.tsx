import { motion } from "framer-motion";
import { CheckCircle2, Award, Linkedin, ExternalLink, Shield, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const certifications = [
    { name: "AWS Certified", color: "from-orange-500 to-yellow-500", link: "https://www.credly.com/users/rupesh-tiwari" },
    { name: "GCP Certified", color: "from-blue-500 to-cyan-500", link: "https://www.credential.net/profile/rupeshtiwari" },
    { name: "Microsoft Azure", color: "from-blue-600 to-indigo-600", link: "https://learn.microsoft.com/en-us/users/rupeshtiwari/" },
    { name: "ISB CTO Scholar", color: "from-purple-500 to-pink-500", link: "https://www.isb.edu" },
  ];

  const milestones = [
    "20+ Years IT Experience (Since 2005)",
    "AWS Senior Customer Solutions Manager",
    "ISB Executive CTO Program Scholar",
    "Microsoft Certified Solutions Architect",
    "Google Cloud Professional Architect",
    "Founder of FullstackMaster.net",
    "Pluralsight Author & Udemy Instructor",
    "Verified Coach on IGotAnOffer (5.0 Rating)",
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-white">
            From Engineer to Executive Coach
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                <img 
                  src="/rupesh-about.png" 
                  alt="Rupesh Tiwari" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-amber-500/50 transition-colors group"
                >
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white text-sm font-medium flex items-center justify-center gap-1">
                    {cert.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold h-12" asChild>
              <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Rupesh Tiwari</span>, currently serving as a <span className="text-amber-400 font-semibold">Senior Customer Solutions Manager at AWS</span>. My journey spans from writing code as a Software Engineer to architecting enterprise solutions and now leading strategic initiatives for AWS customers.
              </p>
              <p>
                As an <span className="text-amber-400 font-semibold">ISB CTO Scholar</span>, I bring a unique blend of deep technical expertise and executive business acumen. I've passed interviews at <span className="text-white font-semibold">Microsoft, Google, and AWS</span>, giving me insider knowledge of what top tech companies look for at senior levels.
              </p>
              <p>
                Through <span className="text-white font-semibold">FullstackMaster.net</span>, I've coached <span className="text-amber-400 font-semibold">50+ Directors, VPs, and Principal Engineers</span> to land offers at FAANG companies with an average <span className="text-green-400 font-semibold">$285K compensation increase</span>.
              </p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Professional Journey
              </h3>
              <ul className="space-y-3">
                {milestones.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <a 
              href="https://igotanoffer.com/en/coach/rupesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">5.0 Rating on IGotAnOffer</div>
                  <div className="text-slate-400 text-sm">51+ Verified Reviews</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
