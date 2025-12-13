import { motion } from "framer-motion";
import { Download, Mail, CheckCircle, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lead_magnet" }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      
      setIsSubmitted(true);
      toast({
        title: "Check your inbox!",
        description: "Your free guide is on the way.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {/* Left side - Content */}
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

            {/* Right side - Form */}
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
                    <h3 className="text-xl font-bold text-white">FREE PDF Guide</h3>
                    <p className="text-slate-400">42 pages of actionable insights</p>
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Where should I send it?
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 bg-[#0F2341] border-[#1E3A5F] text-white placeholder:text-slate-500 focus:border-[#C9A227]"
                          required
                          data-testid="input-lead-magnet-email"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold text-base"
                      disabled={isSubmitting}
                      data-testid="button-download-guide"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Get My Free Guide
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox!</h3>
                    <p className="text-slate-400">
                      Your guide is on its way. Check your spam folder if you don't see it.
                    </p>
                  </div>
                )}

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
