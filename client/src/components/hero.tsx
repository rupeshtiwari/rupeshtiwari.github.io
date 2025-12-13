import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, Linkedin, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const rupeshImage = "/rupesh-hero.png";
  
  const stats = [
    { value: "50+", label: "Directors & VPs Coached" },
    { value: "$285K", label: "Avg Comp Increase" },
    { value: "92%", label: "Offer Rate (L6+)" },
    { value: "5.0", label: "Rating (51+ Reviews)" },
  ];

  const credentials = [
    "AWS Senior CSM",
    "ISB CTO Scholar",
    "Microsoft Certified",
    "Google Cloud Certified",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              I Coach Directors, VPs & Principal Engineers Exclusively
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Stop Interviewing Like a</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Senior IC.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Directors and VPs leave <span className="text-white font-semibold">$200K+</span> on the table because they interview like engineers. I've coached <span className="text-white font-semibold">50+ senior leaders</span> to FAANG offers with <span className="text-cyan-400 font-semibold">$285K avg comp increases</span>.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {credentials.map((cred, i) => (
                <motion.span
                  key={cred}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  {cred}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all border-0" 
                asChild
                data-testid="button-whatsapp"
              >
                <a href="https://wa.me/16094424081?text=Hi%20Rupesh%2C%20I%27d%20like%20to%20discuss%20my%20FAANG%20interview%20preparation." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </a>
              </Button>
              <Button 
                size="lg" 
                className="h-14 px-8 text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all border-0" 
                asChild
                data-testid="button-book"
              >
                <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book 1:1 Coaching
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
                  className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
                  data-testid={`stat-${i}`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img 
                  src={rupeshImage} 
                  alt="Rupesh Tiwari - AWS Senior CSM & Executive Coach" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
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
              className="absolute -right-4 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Got Offer at Amazon</div>
                  <div className="text-green-400 text-xs">+$320K Comp Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 bottom-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">G</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Got Offer at Google</div>
                  <div className="text-green-400 text-xs">+$280K Comp Increase</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500"
        >
          <span className="text-xs uppercase tracking-wider">I Passed Interviews At</span>
          <div className="flex items-center gap-8">
            <span className="text-white font-semibold">Microsoft</span>
            <span className="text-white font-semibold">Google</span>
            <span className="text-cyan-400 font-bold">AWS <span className="text-xs text-slate-400">(Joined)</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
