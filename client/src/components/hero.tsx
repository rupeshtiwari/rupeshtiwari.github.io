import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Code, GraduationCap } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_blue_tech_data_wave_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Founder of FullstackMaster.net
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6 text-foreground">
            Microsoft Certified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Solution Architect
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            AWS Global Senior Solution Architect & Professional Trainer. I help developers master Cloud, Angular, and Node.js through in-depth courses and content.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <a href="https://www.fullstackmaster.net" target="_blank" rel="noopener noreferrer">
                View Courses <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="/blog">
                Read Blog
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <Card icon={Cloud} title="Cloud Native" desc="AWS & Azure Expert" delay={0.3} />
            <Card icon={Server} title="Microservices" desc="Scalable Systems" delay={0.4} className="mt-12" />
            <Card icon={Code} title="Full Stack" desc="Angular & Node.js" delay={0.5} />
            <Card icon={GraduationCap} title="Training" desc="Fullstack Master" delay={0.6} className="mt-12" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, delay, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
