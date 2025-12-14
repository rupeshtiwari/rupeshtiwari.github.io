import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CheckCircle2, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const rupeshImage = "/rupesh-hero.png";
  
  const stats = [
    { value: "20+", label: "Years in Tech" },
    { value: "50+", label: "Leaders Coached" },
    { value: "$285K", label: "Avg Comp Increase" },
    { value: "92%", label: "Offer Rate" },
  ];

  const outcomes = [
    "Behavioral & Leadership Interviews",
    "Executive System Design",
    "Communication & Presence",
    "Resume & LinkedIn Optimization",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-bg-secondary)] via-[var(--theme-bg-card)] to-[var(--theme-bg-secondary)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--theme-gold)]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--theme-gold)]/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Mobile Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mb-6 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1E40AF]/30 to-[#C9A227]/30 rounded-full blur-xl" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#C9A227]/30 shadow-2xl">
                  <img 
                    src="/rupesh-hero.png" 
                    alt="Rupesh Tiwari" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0F2341] border border-[#C9A227]/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-xs font-medium">5.0</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#D4AF37] text-sm font-medium mb-6"
              data-testid="badge-exclusive"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Coaching Leaders Globally | AWS Senior CSM
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.1] mb-6">
              <span className="text-[var(--theme-text-primary)]">Become the Director</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-gold)] via-amber-400 to-[var(--theme-gold)]">
                FAANG Trusts.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--theme-text-secondary)] mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Senior engineers leave <span className="text-[var(--theme-text-primary)] font-semibold">$200K+</span> on the table because they interview like ICs. I've coached <span className="text-[var(--theme-text-primary)] font-semibold">50+ leaders</span> to Director & VP offers with <span className="text-[var(--theme-gold)] font-semibold">$285K avg comp increases</span>.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 max-w-lg mx-auto lg:mx-0">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-[var(--theme-text-secondary)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>{outcome}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-semibold shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40 transition-all border-0" 
                asChild
                data-testid="button-book"
              >
                <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Discovery Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base border-[#C9A227]/40 bg-[#0F2341]/50 hover:bg-[#1A3A5C]/50 text-white hover:border-[#D4AF37]/60" 
                asChild
                data-testid="button-linkedin"
              >
                <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button 
                size="lg" 
                className="h-12 px-6 text-base bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all border-0" 
                asChild
                data-testid="button-courses"
              >
                <a href="https://www.fullstackmaster.net" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-6 text-base border-[#1E3A5F] bg-[#0F2341]/50 hover:bg-[#1A3A5C]/50 text-slate-300 hover:text-white hover:border-[#2E5A8F]" 
                asChild
                data-testid="button-blog"
              >
                <a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer">
                  Read Free Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center p-4 rounded-xl bg-[var(--theme-bg-card)]/60 border border-[var(--theme-border)]/60 hover:border-[var(--theme-gold)]/40 hover:bg-[var(--theme-bg-card)]/80 transition-colors cursor-pointer group"
                  data-testid={`stat-${i}`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[var(--theme-gold)] mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-xs text-[var(--theme-text-muted)] uppercase tracking-wider group-hover:text-[var(--theme-text-secondary)] transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1E40AF]/20 to-[#C9A227]/15 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#1E3A5F]/50 shadow-2xl">
                <img 
                  src={rupeshImage} 
                  alt="Rupesh Tiwari - AWS Senior CSM & Executive Coach" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/90 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">5.0</span>
                    <span className="text-slate-400 text-sm">51+ Verified Reviews</span>
                  </div>
                  <div className="text-white font-semibold">Rupesh Tiwari</div>
                  <div className="text-slate-400 text-sm">AWS Senior CSM | Executive Interview Coach</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 top-1/4 bg-[#0F2341]/95 backdrop-blur-sm border border-[#C9A227]/20 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Director at Amazon</div>
                  <div className="text-green-400 text-xs font-semibold">+$320K Comp Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 bottom-1/4 bg-[#0F2341]/95 backdrop-blur-sm border border-[#C9A227]/20 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">G</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">VP at Google</div>
                  <div className="text-green-400 text-xs font-semibold">+$450K Comp Increase</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
        >
          <span className="text-xs uppercase tracking-wider">I've Passed Interviews At</span>
          <div className="flex items-center gap-8">
            <span className="text-white font-semibold">Microsoft</span>
            <span className="text-white font-semibold">Google</span>
            <span className="text-[#D4AF37] font-bold">AWS <span className="text-xs text-slate-400">(Current)</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
