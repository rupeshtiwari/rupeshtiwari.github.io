import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  const quickActions = [
    {
      icon: Calendar,
      title: "Book a Free Call",
      description: "Schedule a 30-min strategy session",
      link: "https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Me",
      description: "Quick questions? Message me directly",
      link: "https://wa.me/message/JVYSKNCBZ5HKK1",
      color: "from-[#25D366] to-[#128C7E]"
    },
    {
      icon: ExternalLink,
      title: "View Programs",
      description: "See coaching packages & pricing",
      link: "/pricing",
      internal: true,
      color: "from-[#D4AF37] to-yellow-500"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 z-50"
          >
            <div className="bg-[var(--theme-bg-card)] border border-[var(--theme-border)] rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-yellow-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <img 
                        src="/rupesh-about.png" 
                        alt="Rupesh" 
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm">Rupesh Tiwari</div>
                      <div className="text-slate-700 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                        Usually responds in minutes
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-slate-900 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="bg-[var(--theme-border)]/50 rounded-xl p-3">
                  <p className="text-[var(--theme-text-secondary)] text-sm">
                    Hey! I'm here to help you land your dream FAANG role. How can I assist you today?
                  </p>
                </div>

                {showOptions && (
                  <div className="space-y-2">
                    {quickActions.map((action, idx) => (
                      action.internal ? (
                        <a
                          key={idx}
                          href={action.link}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[var(--theme-bg-secondary)]/50 border border-[var(--theme-border)]/50 hover:border-[#D4AF37]/30 transition-colors group"
                          data-testid={`chat-action-${idx}`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0`}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-[var(--theme-text-primary)] font-medium text-sm">{action.title}</div>
                            <div className="text-[var(--theme-text-secondary)] text-xs">{action.description}</div>
                          </div>
                        </a>
                      ) : (
                        <a
                          key={idx}
                          href={action.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-[var(--theme-bg-secondary)]/50 border border-[var(--theme-border)]/50 hover:border-[#D4AF37]/30 transition-colors group"
                          data-testid={`chat-action-${idx}`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0`}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-[var(--theme-text-primary)] font-medium text-sm">{action.title}</div>
                            <div className="text-[var(--theme-text-secondary)] text-xs">{action.description}</div>
                          </div>
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              <div className="p-3 border-t border-[var(--theme-border)]/50">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-full bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] placeholder:text-[var(--theme-text-muted)] text-sm focus:outline-none focus:border-[#D4AF37]"
                    onFocus={() => setShowOptions(false)}
                    onBlur={() => setTimeout(() => setShowOptions(true), 100)}
                    data-testid="chat-input"
                  />
                  <Button 
                    size="icon" 
                    className="rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 hover:from-[#E5C158] hover:to-yellow-400"
                    data-testid="chat-send"
                  >
                    <Send className="w-4 h-4 text-slate-900" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="chat-toggle"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-slate-900" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-slate-900" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
