import { useState, createContext, useContext, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "hero.title": "Land Your Dream FAANG Role",
    "hero.subtitle": "With 1:1 Coaching from an AWS Executive",
    "hero.cta": "Book Free Strategy Call",
    "hero.secondary": "View Programs",
    "about.title": "About Me",
    "about.subtitle": "From Engineer to Executive Coach",
    "results.title": "Real Clients. Real Offers. Real Numbers.",
    "results.subtitle": "These aren't made-up case studies. These are real people who trusted me with their careers.",
    "programs.title": "Coaching Programs",
    "programs.subtitle": "Choose the program that fits your goals",
    "testimonials.title": "What Clients Say",
    "pricing.title": "Pricing",
    "cta.book": "Book Call",
    "cta.whatsapp": "WhatsApp Me",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.pricing": "Pricing",
    "nav.results": "Success Stories",
    "nav.blog": "Blog",
    "footer.rights": "All rights reserved",
  },
  hi: {
    "hero.title": "अपना सपनों का FAANG जॉब पाएं",
    "hero.subtitle": "AWS एग्जीक्यूटिव से 1:1 कोचिंग के साथ",
    "hero.cta": "मुफ्त रणनीति कॉल बुक करें",
    "hero.secondary": "प्रोग्राम देखें",
    "about.title": "मेरे बारे में",
    "about.subtitle": "इंजीनियर से एग्जीक्यूटिव कोच तक",
    "results.title": "असली क्लाइंट। असली ऑफर। असली नंबर।",
    "results.subtitle": "ये बनाई गई केस स्टडीज नहीं हैं। ये असली लोग हैं जिन्होंने मुझ पर भरोसा किया।",
    "programs.title": "कोचिंग प्रोग्राम",
    "programs.subtitle": "अपने लक्ष्य के अनुसार प्रोग्राम चुनें",
    "testimonials.title": "क्लाइंट क्या कहते हैं",
    "pricing.title": "मूल्य निर्धारण",
    "cta.book": "कॉल बुक करें",
    "cta.whatsapp": "WhatsApp करें",
    "nav.about": "परिचय",
    "nav.programs": "प्रोग्राम",
    "nav.pricing": "मूल्य",
    "nav.results": "सफलता की कहानियां",
    "nav.blog": "ब्लॉग",
    "footer.rights": "सर्वाधिकार सुरक्षित",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      if (stored === "en" || stored === "hi") return stored;
    }
    return "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "hi" as Language, name: "हिंदी", flag: "🇮🇳" },
  ];

  return (
    <div className="fixed top-20 right-[72px] z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-[#0F2341] border border-[#1E3A5F] shadow-lg flex items-center justify-center hover:border-[#D4AF37] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change language"
        data-testid="language-toggle"
      >
        <Globe className="w-5 h-5 text-[#D4AF37]" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute top-12 right-0 w-36 bg-[#0F2341] border border-[#1E3A5F] rounded-xl shadow-xl overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 flex items-center gap-3 text-sm transition-colors ${
                  language === lang.code 
                    ? "bg-[#D4AF37]/10 text-[#D4AF37]" 
                    : "text-white hover:bg-[#1E3A5F]/50"
                }`}
                data-testid={`lang-${lang.code}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
