import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_blue_tech_data_wave_background.png";
import rupeshImage from "@assets/rupesh_on_desk_1765301135195.png";

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
            Tech Strategy Leader @ AWS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6 text-foreground">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Future of Tech
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            ISB CTO Scholar & Global Senior Solution Architect. I bridge the gap between strategic business goals and technical execution.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="/blog">
                Read Insights
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
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
             <img 
              src={rupeshImage} 
              alt="Rupesh Tiwari - Tech Strategy Leader" 
              className="w-full h-auto object-cover" 
             />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
