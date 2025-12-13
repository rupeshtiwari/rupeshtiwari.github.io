import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Programs", href: "#programs", isHash: true },
    { name: "About", href: "#about", isHash: true },
    { name: "Testimonials", href: "#testimonials", isHash: true },
    { name: "Blog", href: "https://blog.rupeshtiwari.com", isHash: false, external: true },
  ];

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1E3A5F]/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-white">rupesh</span><span className="text-[#D4AF37]">tiwari</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : link.isHash ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${
                  location === link.href ? "text-[#D4AF37] font-semibold" : "text-slate-400 hover:text-white"
                }`}>
                  {link.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-2 ml-2">
            <Button size="sm" variant="outline" className="border-[#1E3A5F] text-slate-300 hover:bg-[#0F2341] hover:text-white" asChild>
              <a href="https://wa.me/919951622992" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1.5" />
                Chat
              </a>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-semibold border-0" asChild>
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-1.5" />
                Book Call
              </a>
            </Button>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A1628] border-b border-[#1E3A5F]"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="text-lg font-medium text-white cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} href={link.href}
                      className="text-lg font-medium text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                  <a href="https://wa.me/919951622992" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Me
                  </a>
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white font-semibold" asChild>
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Discovery Call
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
