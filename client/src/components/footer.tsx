import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const whatsappLink = "https://wa.me/16094424081";
  
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold font-display mb-4">Let's Connect</h2>
            <p className="text-background/60 text-lg max-w-md">
              Interested in cloud architecture, full-stack training, or technical consulting? Reach out and let's discuss.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-white" asChild>
              <a href="https://linkedin.com/in/rupeshtiwari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Rupesh Tiwari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/rupeshtiwari" className="text-background/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/rupeshtiwari" className="text-background/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/rupeshtiwari" className="text-background/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
