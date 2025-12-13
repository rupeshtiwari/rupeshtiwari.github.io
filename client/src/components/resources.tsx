import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, ArrowRight, Play, Star, Users, FileText, Video } from "lucide-react";

export default function Resources() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Learn With Me</span>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-amber-500/20 text-amber-400 rounded-full mb-1">
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
                  <Video className="w-4 h-4 text-amber-400" />
                  <span>300+ Video Lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>4.8 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Certificates</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-slate-300">System Design Interview Prep</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-slate-300">AWS Solutions Architect</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-slate-300">Angular & Full-Stack Masterclass</span>
                </div>
              </div>

              <Button 
                className="w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold shadow-lg shadow-amber-500/25"
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
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
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
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>300+ Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>50K+ Readers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-cyan-400" />
                  <span>No Signup</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-slate-300">AWS & Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-slate-300">System Design Concepts</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-slate-300">Full-Stack Development</span>
                </div>
              </div>

              <Button 
                className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25"
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
