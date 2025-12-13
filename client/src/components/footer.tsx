import { Github, Linkedin, MessageCircle, Twitter, Calendar, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  const whatsappLink = "https://wa.me/16094424081?text=Hi%20Rupesh%2C%20I%27d%20like%20to%20discuss%20my%20FAANG%20interview%20preparation.";
  const bookingLink = "https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true";
  
  return (
    <footer id="contact" className="bg-[#0A1628] border-t border-[#1E3A5F] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">Ready to Start?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Let's Get You That Offer
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Don't leave your FAANG interview to chance. I've helped 50+ senior leaders land their dream roles with an average $285K comp increase.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="h-14 px-8 text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25" 
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Me
              </a>
            </Button>
            <Button 
              size="lg" 
              className="h-14 px-8 text-base bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] shadow-lg shadow-[#1E40AF]/25" 
              asChild
            >
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book 1:1 Coaching
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12 py-12 border-t border-b border-[#1E3A5F]">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Rupesh Tiwari</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AWS Senior CSM & Executive Interview Coach. Helping Directors, VPs & Principal Engineers land FAANG offers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Blog</a></li>
              <li><a href="https://www.fullstackmaster.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Verified Reviews</a></li>
              <li><a href="https://www.pluralsight.com/authors/rupesh-tiwari" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Pluralsight</a></li>
              <li><a href="https://www.udemy.com/user/rupesh-k-tiwari/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Udemy</a></li>
              <li><a href="https://rupeshtiwari.gumroad.com/l/rupesh-kit" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">Free Interview Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact (USA)</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400 flex items-center gap-2">
                <span className="text-lg">🇺🇸</span> New Jersey, USA
              </li>
              <li className="text-slate-400">Eastern Time (EST/EDT)</li>
              <li><a href="tel:+16094424081" className="text-slate-400 hover:text-[#D4AF37] transition-colors">+1 (609) 442-4081</a></li>
              <li><a href="mailto:rupesh@fullstackmaster.net" className="text-slate-400 hover:text-[#D4AF37] transition-colors">rupesh@fullstackmaster.net</a></li>
              <li className="text-slate-500 text-xs mt-2">500+ US professionals coached</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rupesh Tiwari. All rights reserved. | 100% Confidential - NDA Available
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/rupeshtiwari" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/nickleus" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@FullStackMaster" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
