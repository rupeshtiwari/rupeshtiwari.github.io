import { motion } from "framer-motion";
import { Heart, Home, Users, Quote } from "lucide-react";

export default function FamilySection() {
  return (
    <section className="py-20 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4" />
              Family First
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-[var(--theme-text-primary)]">
              The Real Success Story
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-2xl bg-[var(--theme-bg-card)]/80 border border-[var(--theme-border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[var(--theme-text-primary)] font-bold text-xl">My Family</h3>
                    <p className="text-[var(--theme-text-secondary)]">My biggest achievement</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1E3A5F]/30">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    <div>
                      <p className="text-[var(--theme-text-primary)] font-medium">Beautiful Family</p>
                      <p className="text-[var(--theme-text-secondary)] text-sm">Wife, 2 daughters, 1 son</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1E3A5F]/30">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <p className="text-[var(--theme-text-primary)] font-medium">Based in New Jersey, USA</p>
                      <p className="text-[var(--theme-text-secondary)] text-sm">Living the American dream</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1E3A5F]/30">
                    <span className="text-2xl">🇮🇳</span>
                    <div>
                      <p className="text-[var(--theme-text-primary)] font-medium">Roots in India</p>
                      <p className="text-[var(--theme-text-secondary)] text-sm">From tier-3 city to global stage</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[var(--theme-border)]/30 to-[var(--theme-bg-card)]/30 border border-[var(--theme-border)]/50">
                <Quote className="w-8 h-8 text-[#D4AF37] mb-4" />
                <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed mb-4">
                  "My wife believed in me when I was selling vegetables to pay bills. She saw the engineer in me before I did. Every late night studying, every rejection, every failure, she was there."
                </p>
                <p className="text-[#D4AF37] font-semibold">- Rupesh Tiwari</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]">
                  <div className="text-3xl mb-2">👧</div>
                  <p className="text-[var(--theme-text-primary)] font-medium text-sm">Daughter</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]">
                  <div className="text-3xl mb-2">👧</div>
                  <p className="text-[var(--theme-text-primary)] font-medium text-sm">Daughter</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]">
                  <div className="text-3xl mb-2">👦</div>
                  <p className="text-[var(--theme-text-primary)] font-medium text-sm">Son</p>
                </div>
              </div>

              <p className="text-[var(--theme-text-secondary)] text-center">
                <span className="text-[var(--theme-text-primary)] font-semibold">Career success means nothing without family.</span> I coach because I want others to achieve both, without sacrificing one for the other.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
