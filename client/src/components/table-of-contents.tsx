import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export default function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map(item => document.getElementById(item.id)).filter(Boolean);
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading) {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(items[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className={`bg-[var(--theme-bg-card)] border border-[var(--theme-border)] rounded-xl p-4 ${className}`}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
        data-testid="button-toc-toggle"
      >
        <div className="flex items-center gap-2 text-[var(--theme-text-primary)] font-semibold">
          <List className="w-5 h-5 text-[var(--theme-gold)]" />
          Table of Contents
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--theme-text-muted)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--theme-text-muted)]" />
        )}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-1">
              {items.map((item, idx) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-1.5 px-3 rounded-lg text-sm transition-colors ${
                      item.level === 2 ? 'pl-3' : item.level === 3 ? 'pl-6' : 'pl-9'
                    } ${
                      activeId === item.id
                        ? 'bg-[var(--theme-gold)]/10 text-[var(--theme-gold)] font-medium'
                        : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-secondary)]'
                    }`}
                    data-testid={`toc-item-${idx}`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export function useTocFromHeadings(contentRef: React.RefObject<HTMLElement>): TocItem[] {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;
    
    const headings = contentRef.current.querySelectorAll('h2, h3, h4');
    const tocItems: TocItem[] = [];
    
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      
      tocItems.push({
        id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      });
    });
    
    setItems(tocItems);
  }, [contentRef]);

  return items;
}
