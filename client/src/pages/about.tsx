import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Heart, GraduationCap, Briefcase, Trophy, Users, CheckCircle2, Award, Linkedin, ExternalLink, BadgeCheck, Calendar, Quote, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  const certifications = [
    { name: "AWS Certified Solutions Architect", provider: "Amazon Web Services", color: "from-orange-500 to-yellow-500", link: "https://www.credly.com/users/rupesh-tiwari" },
    { name: "Google Cloud Professional Architect", provider: "Google Cloud", color: "from-blue-500 to-cyan-500", link: "https://www.credential.net/profile/rupeshtiwari" },
    { name: "Microsoft Azure Solutions Architect", provider: "Microsoft", color: "from-blue-600 to-indigo-600", link: "https://learn.microsoft.com/en-us/users/rupeshtiwari/" },
    { name: "ISB Executive CTO Program", provider: "Indian School of Business", color: "from-purple-500 to-pink-500", link: "https://www.isb.edu" },
  ];

  const journeySteps = [
    {
      icon: Heart,
      year: "Childhood",
      title: "Where It All Began",
      color: "from-red-500 to-pink-500",
      story: "I grew up in a small town in India with no money for education. My father was sick for over 10 years since I was in 5th grade. Local heroes stepped in: the petrol pump owner, school teachers, neighbors. They all contributed to my tuition fees. Their belief in me changed everything."
    },
    {
      icon: GraduationCap,
      year: "School Days",
      title: "Selling Eggs to Pay Fees",
      color: "from-blue-500 to-cyan-500",
      story: "In 11th grade, I sold eggs and bread door-to-door in our society to pay my school fees. Every morning before school, I'd carry my basket through the neighborhood. I became the school topper in 10th grade, proving that circumstances don't define your future."
    },
    {
      icon: Briefcase,
      year: "College Years",
      title: "Waiter by Night, Student by Day",
      color: "from-purple-500 to-violet-500",
      story: "College was expensive. I worked as a waiter in restaurants, sold vegetables, and took any job I could find. Vernacular school background, tier-3 city, tier-3 college. Everything was against me. But I kept going. I taught myself programming and got my first job as a JavaScript developer."
    },
    {
      icon: Trophy,
      year: "Career Growth",
      title: "From Developer to Executive",
      color: "from-amber-500 to-yellow-500",
      story: "JavaScript Developer → Solution Architect → Customer Success Manager → AWS Senior CSM. I cracked interviews at Google, Microsoft, and AWS, the same companies that once seemed like impossible dreams. Each rejection taught me something. Each failure made me stronger."
    },
    {
      icon: Users,
      year: "Today",
      title: "Family Man & Coach",
      color: "from-green-500 to-emerald-500",
      story: "Today I'm blessed with a beautiful family: my wife who believed in me through everything, and our 3 children (2 daughters and 1 son). Now I coach others to crack their FAANG dreams because I know what it feels like to come from nothing and achieve everything."
    }
  ];

  const milestones = [
    { year: "2005", event: "Started as JavaScript Developer", icon: "💻" },
    { year: "2010", event: "Became Solution Architect", icon: "🏗️" },
    { year: "2015", event: "Founded FullstackMaster.net", icon: "🚀" },
    { year: "2018", event: "Cracked Google Interview", icon: "🎯" },
    { year: "2020", event: "Joined AWS", icon: "☁️" },
    { year: "2022", event: "ISB CTO Scholar", icon: "🎓" },
    { year: "2024", event: "50+ Clients Coached", icon: "🏆" },
  ];

  const stats = [
    { value: "20+", label: "Years in Tech", icon: Trophy },
    { value: "50+", label: "Clients Coached", icon: Users },
    { value: "$285K", label: "Avg. Salary Increase", icon: Award },
    { value: "92%", label: "Success Rate", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="block text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-2">About Me</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
              From Selling Eggs to AWS Executive
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              If a boy from a vernacular school in a tier-3 city can crack Google, Microsoft, and AWS, 
              <span className="text-white font-semibold"> so can you</span>. Here's my complete story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 text-center">
                <stat.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-yellow-500/20 rounded-3xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                    <img 
                      src="/rupesh-about.png" 
                      alt="Rupesh Tiwari" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-white font-medium">Based in Seattle, WA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-white font-medium">Sr. CSM at AWS</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 hover:from-[#E5C158] hover:to-yellow-400 text-slate-900 font-semibold h-12" asChild>
                  <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <a 
                  href="https://igotanoffer.com/en/coach/rupesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">5.0 on IGotAnOffer</div>
                      <div className="text-slate-400 text-xs">51+ Reviews</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                  Who I Am
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm <span className="text-white font-semibold">Rupesh Tiwari</span>, currently serving as a 
                    <span className="text-[#D4AF37] font-semibold"> Senior Customer Solutions Manager at AWS</span>. 
                    My journey spans from writing code as a Software Engineer to architecting enterprise solutions 
                    and now leading strategic initiatives for AWS customers.
                  </p>
                  <p>
                    As an <span className="text-[#D4AF37] font-semibold">ISB CTO Scholar</span>, I bring a unique 
                    blend of deep technical expertise and executive business acumen. I've passed interviews at 
                    <span className="text-white font-semibold"> Microsoft, Google, and AWS</span>, giving me insider 
                    knowledge of what top tech companies look for at senior levels.
                  </p>
                  <p>
                    Through <span className="text-white font-semibold">FullstackMaster.net</span>, I've coached 
                    <span className="text-[#D4AF37] font-semibold"> 50+ Directors, VPs, and Principal Engineers</span> to 
                    land offers at FAANG companies with an average <span className="text-green-400 font-semibold">$285K compensation increase</span>.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-yellow-500/10 border border-[#D4AF37]/20">
                <Quote className="w-8 h-8 text-[#D4AF37] mb-3" />
                <blockquote className="text-lg text-white italic leading-relaxed">
                  "Every person who helped me — the petrol pump owner, my teachers, my neighbors — they didn't just pay my fees. 
                  They taught me that success is never alone. Now it's my turn to help others."
                </blockquote>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BadgeCheck className="w-6 h-6 text-[#D4AF37]" />
                  Certifications & Credentials
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <motion.a
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="p-4 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 hover:border-[#D4AF37]/50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                          <BadgeCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium flex items-center gap-1">
                            {cert.name}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-slate-400 text-sm">{cert.provider}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#D4AF37]" />
                  Career Timeline
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />
                  <div className="space-y-6">
                    {milestones.map((milestone, idx) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="relative pl-12"
                      >
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0F2341] border-2 border-[#D4AF37] flex items-center justify-center text-sm">
                          {milestone.icon}
                        </div>
                        <div className="p-4 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/30">
                          <div className="text-[#D4AF37] text-sm font-semibold">{milestone.year}</div>
                          <div className="text-white font-medium">{milestone.event}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              My Complete Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent hidden md:block" />
              
              <div className="space-y-12 md:space-y-0">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F] hover:border-[#D4AF37]/30 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-lg`}>
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="text-[#D4AF37] text-sm font-semibold">{step.year}</span>
                            <h3 className="text-white font-bold text-lg">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          {step.story}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#0A1628] hidden md:block z-10" />
                    
                    <div className="md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Career?</h3>
              <p className="text-slate-400 mb-6">
                Let me help you achieve the same success. Book a free strategy call to discuss your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold"
                  asChild
                  data-testid="button-about-cta"
                >
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Strategy Call
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#1E3A5F] text-white hover:bg-[#0F2341]"
                  asChild
                >
                  <Link href="/case-studies">
                    View Success Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
