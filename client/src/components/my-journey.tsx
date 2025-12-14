import { motion } from "framer-motion";
import { Heart, GraduationCap, Briefcase, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyJourney() {
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

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-[var(--theme-bg-secondary)] to-[var(--theme-bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">My Story</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            From Selling Eggs to <span className="text-[#D4AF37]">AWS Executive</span>
          </h2>
          <p className="text-[var(--theme-text-secondary)] text-lg max-w-3xl mx-auto">
            If a boy from a vernacular school in a tier-3 city can crack Google, Microsoft, and AWS, <span className="text-[var(--theme-text-primary)] font-semibold">so can you</span>. Here's my journey.
          </p>
        </motion.div>

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
                  <div className={`p-6 rounded-2xl bg-[var(--theme-bg-card)]/80 border border-[var(--theme-border)] hover:border-[#D4AF37]/30 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-lg`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[#D4AF37] text-sm font-semibold">{step.year}</span>
                        <h3 className="text-[var(--theme-text-primary)] font-bold text-lg">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                      {step.story}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[var(--theme-bg-secondary)] hidden md:block z-10" />
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-[var(--theme-border)]/50 to-[var(--theme-bg-card)]/50 border border-[#D4AF37]/20">
            <p className="text-xl text-[var(--theme-text-primary)] font-medium mb-4 italic">
              "Every person who helped me, the petrol pump owner, my teachers, my neighbors, they didn't just pay my fees. They taught me that success is never alone. Now it's my turn to help others."
            </p>
            <p className="text-[#D4AF37] font-semibold">- Rupesh Tiwari</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold"
              asChild
              data-testid="button-journey-cta"
            >
              <a href="https://fullstackmaster.net" target="_blank" rel="noopener noreferrer">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 border-[var(--theme-border)] bg-[var(--theme-bg-card)]/50 hover:bg-[var(--theme-bg-card)]/80 text-[var(--theme-text-primary)]"
              asChild
              data-testid="button-journey-book"
            >
              <a href="https://topmate.io/nicetss" target="_blank" rel="noopener noreferrer">
                Book 1:1 With Me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
