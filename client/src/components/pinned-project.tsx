import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PinnedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <div className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-2xl max-w-xs hover:border-primary/40 transition-colors group">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="bg-white p-2 rounded-lg border border-border shadow-sm">
            <img src="/assets/fsm-logo-square.jpeg" alt="Fullstack Master" className="w-5 h-5 object-contain" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            Featured Platform
          </span>
        </div>
        
        <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
          Fullstack Master
        </h4>
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
          The ultimate platform to master modern full-stack development.
        </p>
        
        <Button size="sm" className="w-full text-xs h-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md shadow-primary/20" asChild>
          <a 
            href="https://www.fullstackmaster.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Learning <ExternalLink className="ml-2 w-3 h-3" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
