import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  const rupeshImage = "/rupesh-headshot.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Founder Badge */}
          <motion.a
            href="https://www.fullstackmaster.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-primary/10 border border-primary/20 hover:border-primary/40 text-primary text-sm font-medium mb-8 cursor-pointer transition-all hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-bold">
              Founder of FullstackMaster.net
            </span>
            <ExternalLink className="w-3 h-3 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6 text-foreground">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 animate-gradient-x">
              Future of Tech
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Tech Strategy Leader @ AWS & ISB CTO Scholar. Bridging the gap between strategic business goals and technical execution.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
              <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm hover:bg-background/50" asChild>
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
          className="relative hidden lg:block group perspective-1000"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out bg-gradient-to-b from-gray-100 to-white">
             {/* Subtle overlay to integrate B&W image with blue theme */}
             <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" />
             
             <img 
              src={rupeshImage} 
              alt="Rupesh Tiwari - Tech Strategy Leader" 
              className="w-full h-auto object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 grayscale contrast-110" 
             />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
