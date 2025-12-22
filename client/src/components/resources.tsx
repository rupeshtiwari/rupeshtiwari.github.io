import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, ArrowRight, Play, Star, Users, FileText, Video } from "lucide-react";

export default function Resources() {
  return (
    <section className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--theme-gold)] text-sm font-semibold uppercase tracking-wider">Learn With Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            Level Up Your Skills
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
            Whether you prefer structured courses or free articles, I've got you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* FullStackMaster - Paid Courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
            data-testid="card-fullstackmaster"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-[var(--theme-bg-card)] backdrop-blur-sm border border-[var(--theme-gold)]/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[var(--theme-gold)]/20 text-[var(--theme-gold)] rounded-full mb-1">
                    Premium Courses
                  </span>
                  <h3 className="text-xl font-bold text-[var(--theme-text-primary)]">FullStackMaster.net</h3>
                </div>
              </div>

              <p className="text-[var(--theme-text-secondary)] mb-6 leading-relaxed">
                Complete video courses on System Design, AWS, Angular, and Full-Stack Development. 
                Perfect for engineers preparing for senior roles at top companies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <Video className="w-4 h-4 text-[var(--theme-gold)]" />
                  <span>300+ Video Lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <Users className="w-4 h-4 text-[var(--theme-gold)]" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <Star className="w-4 h-4 text-[var(--theme-gold)]" />
                  <span>4.8 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <GraduationCap className="w-4 h-4 text-[var(--theme-gold)]" />
                  <span>Certificates</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--theme-gold)]" />
                  <span className="text-[var(--theme-text-secondary)]">System Design Interview Prep</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--theme-gold)]" />
                  <span className="text-[var(--theme-text-secondary)]">AWS Solutions Architect</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--theme-gold)]" />
                  <span className="text-[var(--theme-text-secondary)]">Angular & Full-Stack Masterclass</span>
                </div>
              </div>

              <Button 
                className="w-full h-12 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-semibold shadow-lg shadow-[#C9A227]/25"
                asChild
                data-testid="button-fullstackmaster"
              >
                <a href="https://www.fullstackmaster.net" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Blog - Free Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
            data-testid="card-blog"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-[var(--theme-bg-card)] backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-600 dark:text-green-400 rounded-full mb-1">
                    100% Free
                  </span>
                  <h3 className="text-xl font-bold text-[var(--theme-text-primary)]">Technical Blog</h3>
                </div>
              </div>

              <p className="text-[var(--theme-text-secondary)] mb-6 leading-relaxed">
                Deep-dive articles on Cloud Architecture, System Design patterns, and Full-Stack best practices. 
                Learn from 15+ years of enterprise experience for free.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>300+ Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>50K+ Readers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-muted)]">
                  <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>No Signup</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span className="text-[var(--theme-text-secondary)]">AWS & Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span className="text-[var(--theme-text-secondary)]">System Design Concepts</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span className="text-[var(--theme-text-secondary)]">Full-Stack Development</span>
                </div>
              </div>

              <Button 
                className="w-full h-12 bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-semibold shadow-lg shadow-[#1E40AF]/25"
                asChild
                data-testid="button-blog"
              >
                <a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Free Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
