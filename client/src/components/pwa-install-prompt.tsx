import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const APP_VERSION = "1.1.0";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);
    
    const standalone = window.matchMedia("(display-mode: standalone)").matches || 
                       (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    const dismissed = localStorage.getItem("pwa-install-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    if (Date.now() - dismissedTime < oneWeek) {
      return;
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      setTimeout(() => {
        if (!standalone) {
          setShowInstallPrompt(true);
        }
      }, 5000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    if (iOS && !standalone) {
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 5000);
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data?.type === "SW_UPDATE_AVAILABLE") {
          const storedVersion = localStorage.getItem("app-version");
          if (storedVersion && storedVersion !== event.data.version) {
            setShowUpdatePrompt(true);
          }
          localStorage.setItem("app-version", event.data.version);
        }
      });
    }

    localStorage.setItem("app-version", APP_VERSION);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
  };

  const handleUpdate = () => {
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "SKIP_WAITING" });
    }
    window.location.reload();
  };

  if (isStandalone && !showUpdatePrompt) return null;

  return (
    <>
      <AnimatePresence>
        {showInstallPrompt && !isStandalone && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
          >
            <div className="bg-[#0F2341] border border-[#1E3A5F] rounded-2xl shadow-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-slate-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm mb-1">Install App</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    {isIOS 
                      ? "Tap the share button and 'Add to Home Screen' for quick access"
                      : "Add to your home screen for quick access to coaching resources"}
                  </p>
                  <div className="flex gap-2">
                    {!isIOS && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 hover:from-[#E5C158] hover:to-yellow-400 text-slate-900 font-semibold text-xs h-8"
                        onClick={handleInstall}
                        data-testid="button-install-app"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Install
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-slate-400 hover:text-white text-xs h-8"
                      onClick={handleDismiss}
                      data-testid="button-dismiss-install"
                    >
                      Maybe Later
                    </Button>
                  </div>
                </div>
                <button
                  onClick={handleDismiss}
                  className="text-slate-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showUpdatePrompt && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-20 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl shadow-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm mb-1">Update Available</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    A new version of the app is available with improvements.
                  </p>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xs h-8"
                    onClick={handleUpdate}
                    data-testid="button-update-app"
                  >
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Update Now
                  </Button>
                </div>
                <button
                  onClick={() => setShowUpdatePrompt(false)}
                  className="text-slate-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
