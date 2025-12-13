import { motion } from "framer-motion";
import { Download, CheckCircle, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadMagnet() {
  const gumroadUrl = "https://rupeshtiwari.gumroad.com/l/rupesh-kit";

  const benefits = [
    "The exact framework I used to crack Google, Microsoft, and AWS",
    "5 behavioral questions every FAANG interviewer asks",
    "System design template that works for any company",
    "My personal preparation timeline (12 weeks to offer)",
    "Salary negotiation scripts that added $50K+ to my clients' offers",
  ];

  return (
    <section id="free-guide" className="py-24 bg-gradient-to-b from-[#0F2341] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#D4AF37] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Free Download
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
                The FAANG Interview Blueprint
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                5 Secrets That Helped a Tier-3 College Kid Crack Google, Microsoft & AWS
              </p>
              
              <p className="text-slate-400 mb-6">
                This is the exact playbook I wish I had when I started. No fluff, no generic advice. 
                Just the real strategies that helped me and 50+ clients land FAANG offers.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-[#0A1628] border border-[#1E3A5F] shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">FREE Interview Kit</h3>
                    <p className="text-slate-400">Everything you need to crack FAANG</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>PDF Guide with frameworks</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>System design templates</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Behavioral question cheatsheet</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold text-base"
                  asChild
                  data-testid="button-download-guide"
                >
                  <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Get Free Kit on Gumroad
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <div className="mt-6 pt-6 border-t border-[#1E3A5F]">
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                    <span>500+ downloads</span>
                    <span>4.9 rating</span>
                    <span>Free forever</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
