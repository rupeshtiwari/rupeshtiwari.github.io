import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://blog.rupeshtiwari.com/search?q=${encodeURIComponent(searchQuery.trim())}`, '_blank');
      setSearchQuery("");
      setShowSearch(false);
    }
  };

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
    { name: "Crack FAANG Interview", href: "https://www.fullstackmaster.net", isHash: false, external: true, highlight: true },
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
                className={`text-sm font-medium transition-colors ${
                  (link as any).highlight 
                    ? "text-[#D4AF37] font-semibold hover:text-[#E5C158]" 
                    : "text-slate-400 hover:text-white"
                }`}
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
            <AnimatePresence>
              {showSearch && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSearch}
                  className="overflow-hidden"
                >
                  <Input
                    type="text"
                    placeholder="Search blog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-8 bg-[#0F2341] border-[#1E3A5F] text-white placeholder:text-slate-500 focus:border-[#D4AF37]"
                    autoFocus
                    data-testid="input-search"
                  />
                </motion.form>
              )}
            </AnimatePresence>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              data-testid="button-search-toggle"
              title="Search Blog"
            >
              <Search className="w-4 h-4" />
            </button>
            <Button size="sm" variant="outline" className="border-[#1E3A5F] text-slate-300 hover:bg-[#0F2341] hover:text-white" asChild>
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
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
              <form onSubmit={handleSearch} className="relative mb-2">
                <Input
                  type="text"
                  placeholder="Search blog articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 bg-[#0F2341] border-[#1E3A5F] text-white placeholder:text-slate-500 focus:border-[#D4AF37] pr-10"
                  data-testid="input-search-mobile"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#D4AF37]"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-medium py-3 px-2 -mx-2 block rounded-lg active:bg-[#1E3A5F]/50 ${
                      (link as any).highlight 
                        ? "text-[#D4AF37] font-bold" 
                        : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {(link as any).highlight && <span className="ml-2">→</span>}
                  </a>
                ) : link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="text-lg font-medium text-white py-3 px-2 -mx-2 block rounded-lg active:bg-[#1E3A5F]/50 cursor-pointer"
                    data-testid={`mobile-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} href={link.href}
                      className="text-lg font-medium text-white py-3 px-2 -mx-2 block rounded-lg active:bg-[#1E3A5F]/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
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
