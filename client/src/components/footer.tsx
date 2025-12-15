import { Github, Linkedin, MessageCircle, Twitter, Calendar, Youtube, ExternalLink, Shield, BadgeCheck, Share2, Link2, Check, Printer, FileDown, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const bookingLink = "https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true";
  const siteUrl = "https://www.rupeshtiwari.com";
  const siteTitle = "Rupesh Tiwari - AWS Executive Interview Coach";
  
  const getObfuscatedEmail = () => {
    const parts = ['rupesh', 'fullstackmaster', 'net'];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  const siteDescription = "AWS Senior CSM coaching Directors & VPs to FAANG offers. 92% offer rate, $285K avg comp increase.";

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteTitle)}&url=${encodeURIComponent(siteUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(siteTitle + " - " + siteUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent(siteTitle);
    const body = encodeURIComponent(`Check out this amazing interview coaching service:\n\n${siteTitle}\n${siteDescription}\n\nVisit: ${siteUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const printPage = () => {
    window.print();
  };

  const saveToPdf = () => {
    window.print();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };
  
  return (
    <footer id="contact" className="bg-[var(--theme-bg-secondary)] border-t border-[var(--theme-border)] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--theme-gold)] text-sm font-semibold uppercase tracking-wider">Ready to Start?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
            Let's Get You That Offer
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto mb-8">
            Don't leave your FAANG interview to chance. I've helped 50+ senior leaders land their dream roles with an average $285K comp increase.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="h-14 px-8 text-base bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] shadow-lg shadow-[#1E40AF]/25" 
              asChild
            >
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Discovery Call
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base border-[var(--theme-border)] hover:bg-[var(--theme-bg-card)]" 
              asChild
            >
              <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12 py-12 border-t border-b border-[var(--theme-border)]">
          <div>
            <h3 className="text-[var(--theme-text-primary)] font-bold text-lg mb-4">Rupesh Tiwari</h3>
            <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">
              AWS Senior CSM & Executive Interview Coach. Helping Directors, VPs & Principal Engineers land FAANG offers.
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--theme-text-primary)] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Testimonials</a></li>
              <li><a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Blog</a></li>
              <li><a href="https://www.fullstackmaster.net" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--theme-text-primary)] font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Verified Reviews</a></li>
              <li><a href="https://www.pluralsight.com/authors/rupesh-tiwari" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Pluralsight</a></li>
              <li><a href="https://www.udemy.com/user/rupesh-k-tiwari/" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Udemy</a></li>
              <li><a href="https://rupeshtiwari.gumroad.com/l/rupesh-kit" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Free Interview Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--theme-text-primary)] font-semibold mb-4">Contact (USA)</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[var(--theme-text-muted)] flex items-center gap-2">
                <span className="text-lg">🇺🇸</span> New Jersey, USA
              </li>
              <li className="text-[var(--theme-text-muted)]">Eastern Time (EST/EDT)</li>
              <li>
                <a 
                  href={`mailto:${getObfuscatedEmail()}`} 
                  className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${getObfuscatedEmail()}`;
                  }}
                >
                  {getObfuscatedEmail()}
                </a>
              </li>
              <li><a href={bookingLink} target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-gold)] transition-colors">Book a Call</a></li>
              <li className="text-[var(--theme-text-muted)] text-xs mt-2">500+ US professionals coached</li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--theme-bg-card)] to-[var(--theme-bg-secondary)] rounded-2xl p-6 md:p-8 mb-8 border border-[var(--theme-border)] shadow-lg"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[var(--theme-gold)]/10 text-[var(--theme-gold)] px-4 py-2 rounded-full text-sm font-semibold mb-3">
              <Share2 className="w-4 h-4" />
              Share & Save
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--theme-text-primary)]">
              Found This Helpful? Share It!
            </h3>
            <p className="text-[var(--theme-text-muted)] text-sm mt-2">
              Help others discover this coaching resource
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            <button
              onClick={shareToLinkedIn}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#0A66C2] text-white hover:bg-[#004182] transition-all hover:scale-105 shadow-md"
              data-testid="button-share-linkedin"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-xs font-medium">LinkedIn</span>
            </button>
            
            <button
              onClick={shareToTwitter}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#1DA1F2] text-white hover:bg-[#0c85d0] transition-all hover:scale-105 shadow-md"
              data-testid="button-share-twitter"
            >
              <Twitter className="w-6 h-6" />
              <span className="text-xs font-medium">Twitter</span>
            </button>
            
            <button
              onClick={shareToFacebook}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#1877F2] text-white hover:bg-[#0d65d9] transition-all hover:scale-105 shadow-md"
              data-testid="button-share-facebook"
            >
              <Facebook className="w-6 h-6" />
              <span className="text-xs font-medium">Facebook</span>
            </button>
            
            <button
              onClick={shareToWhatsApp}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-all hover:scale-105 shadow-md"
              data-testid="button-share-whatsapp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs font-medium">WhatsApp</span>
            </button>
            
            <button
              onClick={shareByEmail}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#EA4335] text-white hover:bg-[#c5221f] transition-all hover:scale-105 shadow-md"
              data-testid="button-share-email"
            >
              <Mail className="w-6 h-6" />
              <span className="text-xs font-medium">Email</span>
            </button>
            
            <button
              onClick={printPage}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--theme-text-secondary)] text-white hover:bg-[var(--theme-text-primary)] transition-all hover:scale-105 shadow-md"
              data-testid="button-print"
            >
              <Printer className="w-6 h-6" />
              <span className="text-xs font-medium">Print</span>
            </button>
            
            <button
              onClick={saveToPdf}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FF5722] text-white hover:bg-[#E64A19] transition-all hover:scale-105 shadow-md"
              data-testid="button-save-pdf"
            >
              <FileDown className="w-6 h-6" />
              <span className="text-xs font-medium">Save PDF</span>
            </button>
            
            <button
              onClick={copyLink}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:scale-105 shadow-md ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[var(--theme-gold)] text-slate-900 hover:bg-amber-500'
              }`}
              data-testid="button-copy-link"
            >
              {copied ? <Check className="w-6 h-6" /> : <Link2 className="w-6 h-6" />}
              <span className="text-xs font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
          
          <div className="mt-6 pt-4 border-t border-[var(--theme-border)] text-center">
            <p className="text-xs text-[var(--theme-text-muted)]">
              When you share, your friends will see the preview image and description
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[var(--theme-text-muted)] text-sm">
              <p>© {new Date().getFullYear()} Rupesh Tiwari. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-[var(--theme-gold)] transition-colors" data-testid="link-privacy">Privacy Policy</a>
                <span className="hidden sm:inline">|</span>
                <span>100% Confidential - NDA Available</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/rupeshtiwari" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/nickleus" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-tiwari/" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@FullStackMaster" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
