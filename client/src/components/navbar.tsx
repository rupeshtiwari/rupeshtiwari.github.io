import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar, MessageCircle, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./theme-toggle";

const searchSuggestions = [
  { term: "How to crack FAANG interview", icon: "🎯" },
  { term: "How to become a Solutions Architect", icon: "🏗️" },
  { term: "What is System Design", icon: "💡" },
  { term: "How to solve System Design problems", icon: "🧩" },
  { term: "How to become like Rupesh", icon: "⭐" },
  { term: "AWS interview preparation", icon: "☁️" },
  { term: "How to get Director level job", icon: "👔" },
  { term: "FAANG behavioral interview tips", icon: "🗣️" },
  { term: "How to negotiate salary at FAANG", icon: "💰" },
  { term: "Microservices architecture patterns", icon: "🔧" },
  { term: "Leadership principles for tech", icon: "🚀" },
  { term: "How to prepare for Amazon LP", icon: "📦" },
  { term: "Google interview process explained", icon: "🔍" },
  { term: "Resume tips for senior engineers", icon: "📝" },
  { term: "Career growth to Staff Engineer", icon: "📈" },
  { term: "How to ace technical interviews", icon: "✅" },
  { term: "Azure vs AWS comparison", icon: "⚡" },
  { term: "Kubernetes for beginners", icon: "⚙️" },
  { term: "DevOps best practices", icon: "🛠️" },
  { term: "Angular vs React comparison", icon: "⚔️" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDesktopSuggestions, setShowDesktopSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  const filteredSuggestions = searchQuery.trim()
    ? searchSuggestions.filter(s => 
        s.term.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchSuggestions;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://blog.rupeshtiwari.com/search?q=${encodeURIComponent(searchQuery.trim())}`, '_blank');
      setSearchQuery("");
      setShowSearch(false);
      setShowDesktopSuggestions(false);
    }
  };

  const handleSuggestionClick = (term: string) => {
    window.open(`https://blog.rupeshtiwari.com/search?q=${encodeURIComponent(term)}`, '_blank');
    setSearchQuery("");
    setShowSearch(false);
    setShowDesktopSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDesktopSuggestions) return;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[selectedIndex].term);
    } else if (e.key === "Escape") {
      setShowDesktopSuggestions(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDesktopSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { name: "About", href: "/about", isHash: false, external: false },
    { name: "Programs", href: "#programs", isHash: true },
    { name: "Pricing", href: "/pricing", isHash: false, external: false },
    { name: "Success Stories", href: "/case-studies", isHash: false, external: false },
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
        scrolled ? "bg-[var(--theme-bg-secondary)]/95 backdrop-blur-md border-b border-[var(--theme-border)]/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-[var(--theme-text-primary)]">rupesh</span><span className="text-[var(--theme-gold)]">tiwari</span>
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
                    ? "text-[var(--theme-gold)] font-semibold hover:opacity-80" 
                    : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]"
                }`}
              >
                {link.name}
              </a>
            ) : link.isHash ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-sm font-medium text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${
                  location === link.href ? "text-[var(--theme-gold)] font-semibold" : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]"
                }`}>
                  {link.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-2 ml-2">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  ref={searchRef}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "280px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-visible"
                >
                  <form onSubmit={handleSearch}>
                    <Input
                      type="text"
                      placeholder="Search blog..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowDesktopSuggestions(true);
                        setSelectedIndex(-1);
                      }}
                      onFocus={() => setShowDesktopSuggestions(true)}
                      onKeyDown={handleKeyDown}
                      className="h-8 bg-[var(--theme-bg-card)] border-[var(--theme-border)] text-[var(--theme-text-primary)] placeholder:text-[var(--theme-text-muted)] focus:border-[var(--theme-gold)]"
                      autoFocus
                      data-testid="input-search"
                    />
                  </form>
                  <AnimatePresence>
                    {showDesktopSuggestions && filteredSuggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-[var(--theme-bg-card)] border border-[var(--theme-border)] rounded-lg shadow-xl overflow-hidden z-50"
                      >
                        <div className="px-3 py-2 border-b border-[var(--theme-border)]">
                          <span className="text-xs text-[var(--theme-text-muted)] flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Popular Topics
                          </span>
                        </div>
                        {filteredSuggestions.slice(0, 6).map((suggestion, index) => (
                          <button
                            key={suggestion.term}
                            onClick={() => handleSuggestionClick(suggestion.term)}
                            className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors ${
                              index === selectedIndex
                                ? "bg-[var(--theme-gold)]/20 text-[var(--theme-gold)]"
                                : "text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-secondary)]"
                            }`}
                            data-testid={`suggestion-${suggestion.term.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span>{suggestion.icon}</span>
                            <span>{suggestion.term}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => {
                setShowSearch(!showSearch);
                if (!showSearch) setShowDesktopSuggestions(true);
              }}
              className="p-2 text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors"
              data-testid="button-search-toggle"
              title="Search Blog"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <Button size="sm" variant="outline" className="border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg-card)] hover:text-[var(--theme-text-primary)]" asChild>
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
          className="md:hidden p-2 text-[var(--theme-text-primary)]"
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
            className="md:hidden bg-[var(--theme-bg-secondary)] border-b border-[var(--theme-border)]"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="relative mb-2">
                <form onSubmit={handleSearch}>
                  <Input
                    type="text"
                    placeholder="Search blog articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 bg-[var(--theme-bg-card)] border-[var(--theme-border)] text-[var(--theme-text-primary)] placeholder:text-[var(--theme-text-muted)] focus:border-[var(--theme-gold)] pr-10"
                    data-testid="input-search-mobile"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--theme-text-muted)] hover:text-[#D4AF37]"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 bg-[var(--theme-bg-card)] border border-[var(--theme-border)] rounded-lg overflow-hidden"
                >
                  <div className="px-3 py-2 border-b border-[var(--theme-border)]">
                    <span className="text-xs text-[var(--theme-text-muted)] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Popular Topics
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {filteredSuggestions.slice(0, 6).map((suggestion) => (
                      <button
                        key={suggestion.term}
                        onClick={() => {
                          handleSuggestionClick(suggestion.term);
                          setIsOpen(false);
                        }}
                        className="px-3 py-2 text-left text-sm flex items-center gap-2 text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-secondary)] rounded-md transition-colors active:scale-95"
                        data-testid={`suggestion-mobile-${suggestion.term.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span>{suggestion.icon}</span>
                        <span className="truncate">{suggestion.term}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-medium py-3 px-2 -mx-2 block rounded-lg active:bg-[var(--theme-bg-card)] ${
                      (link as any).highlight 
                        ? "text-[var(--theme-gold)] font-bold" 
                        : "text-[var(--theme-text-primary)]"
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
                    className="text-lg font-medium text-[var(--theme-text-primary)] py-3 px-2 -mx-2 block rounded-lg active:bg-[var(--theme-bg-card)] cursor-pointer"
                    data-testid={`mobile-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} href={link.href}
                      className="text-lg font-medium text-[var(--theme-text-primary)] py-3 px-2 -mx-2 block rounded-lg active:bg-[var(--theme-bg-card)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                  </Link>
                )
              ))}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--theme-border)]">
                <span className="text-sm text-[var(--theme-text-muted)]">Theme</span>
                <ThemeToggle />
              </div>
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
