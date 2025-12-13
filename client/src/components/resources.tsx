import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, ArrowRight, Play, Star, Users, FileText, Video } from "lucide-react";

export default function Resources() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0F2341] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E40AF]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">Learn With Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Level Up Your Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
            <div className="relative bg-[#0A1628]/80 backdrop-blur-sm border border-[#C9A227]/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#0A1628]" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#C9A227]/20 text-[#D4AF37] rounded-full mb-1">
                    Premium Courses
                  </span>
                  <h3 className="text-xl font-bold text-white">FullStackMaster.net</h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Complete video courses on System Design, AWS, Angular, and Full-Stack Development. 
                Perfect for engineers preparing for senior roles at top companies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Video className="w-4 h-4 text-[#D4AF37]" />
                  <span>300+ Video Lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-[#D4AF37]" />
                  <span>4.8 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Certificates</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-slate-300">System Design Interview Prep</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-slate-300">AWS Solutions Architect</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-slate-300">Angular & Full-Stack Masterclass</span>
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
            <div className="relative bg-[#0A1628]/80 backdrop-blur-sm border border-[#1E40AF]/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full mb-1">
                    100% Free
                  </span>
                  <h3 className="text-xl font-bold text-white">Technical Blog</h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Deep-dive articles on Cloud Architecture, System Design patterns, and Full-Stack best practices. 
                Learn from 15+ years of enterprise experience for free.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <FileText className="w-4 h-4 text-[#1D4ED8]" />
                  <span>300+ Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="w-4 h-4 text-[#1D4ED8]" />
                  <span>50K+ Readers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <BookOpen className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-[#1D4ED8]" />
                  <span>No Signup</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span className="text-slate-300">AWS & Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span className="text-slate-300">System Design Concepts</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span className="text-slate-300">Full-Stack Development</span>
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
