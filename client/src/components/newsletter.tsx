import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
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
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }
      
      setIsSubmitted(true);
      toast({
        title: "You're in!",
        description: "Welcome to the weekly interview tips newsletter.",
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

  return (
    <section id="newsletter" className="py-16 bg-[#0F2341] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#0F2341] border border-[#1E3A5F]">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#D4AF37] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Weekly Newsletter
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                Get Interview Tips Every Week
              </h2>
              <p className="text-slate-400">
                Join 2,000+ engineers getting weekly tips on system design, behavioral interviews, and career growth.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-[#0A1628] border-[#1E3A5F] text-white placeholder:text-slate-500 focus:border-[#C9A227]"
                    required
                    data-testid="input-newsletter-email"
                  />
                </div>
                <Button 
                  type="submit"
                  className="h-12 px-6 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
                  disabled={isSubmitting}
                  data-testid="button-newsletter-subscribe"
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">You're subscribed! Check your inbox.</span>
              </div>
            )}

            <p className="text-xs text-slate-500 text-center mt-4">
              No spam. Unsubscribe anytime. I respect your inbox.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
