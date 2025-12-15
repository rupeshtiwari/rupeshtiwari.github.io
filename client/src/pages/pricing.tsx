import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Calendar, 
  Star, 
  Clock, 
  Video, 
  FileText, 
  MessageSquare,
  Zap,
  Crown,
  Rocket,
  Shield,
  ArrowRight
} from "lucide-react";

const packages = [
  {
    id: "single",
    name: "Single Session",
    tagline: "Try before you commit",
    price: 199,
    duration: "60 minutes",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    features: [
      "60-minute 1:1 mock interview or coaching",
      "Detailed written feedback (2-3 pages)",
      "Recording of the session",
      "Action items for improvement",
      "Email follow-up support (7 days)",
    ],
    idealFor: "Engineers who want to test the waters before committing to a full program.",
    cta: "Book Single Session",
  },
  {
    id: "starter",
    name: "Interview Prep Sprint",
    tagline: "4-week intensive",
    price: 699,
    originalPrice: 796,
    duration: "4 sessions",
    icon: Rocket,
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/30",
    popular: false,
    features: [
      "4 x 60-minute coaching sessions",
      "Behavioral interview deep dive",
      "System design framework",
      "Resume & LinkedIn review",
      "Unlimited email support",
      "Session recordings",
      "Custom study plan",
    ],
    idealFor: "Senior Engineers and Managers targeting their first FAANG interview.",
    cta: "Start Sprint",
  },
  {
    id: "complete",
    name: "Executive Fast Track",
    tagline: "8-week transformation",
    price: 1299,
    originalPrice: 1592,
    duration: "8 sessions",
    icon: Crown,
    color: "from-[#C9A227] to-[#D4AF37]",
    borderColor: "border-[#C9A227]/30",
    popular: true,
    features: [
      "8 x 60-minute coaching sessions",
      "Complete interview preparation",
      "Executive presence coaching",
      "Salary negotiation strategy",
      "Unlimited async support",
      "Priority scheduling",
      "Lifetime access to materials",
      "2 bonus mock interviews",
    ],
    idealFor: "Directors and VPs targeting senior leadership roles at top companies.",
    cta: "Apply Now",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "Not happy after your first session? Get a full refund, no questions asked.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Sessions available evenings and weekends. I work around your schedule.",
  },
  {
    icon: Video,
    title: "All Sessions Recorded",
    description: "Review your sessions anytime. Learn from your mistakes.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-primary)] text-[var(--theme-text-primary)]">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">
              Invest in Your Future
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
              Clear Pricing. Real Results.
            </h1>
            <p className="text-xl text-[var(--theme-text-secondary)]">
              Choose the package that fits your timeline and goals. 
              All prices in USD. No hidden fees.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl bg-[var(--theme-bg-card)]/50 border ${pkg.borderColor} hover:border-opacity-60 transition-all ${pkg.popular ? 'ring-2 ring-[var(--theme-gold)]' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1">
                    <Star className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--theme-text-primary)]">{pkg.name}</h3>
                    <p className="text-sm text-[var(--theme-text-secondary)]">{pkg.tagline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[var(--theme-text-primary)]">${pkg.price}</span>
                    <span className="text-[var(--theme-text-secondary)]">USD</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[var(--theme-text-muted)] line-through">${pkg.originalPrice}</span>
                      <span className="text-green-400 text-sm font-medium">
                        Save ${pkg.originalPrice - pkg.price}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-[var(--theme-text-secondary)] mt-1">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--theme-text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="p-3 rounded-lg bg-[var(--theme-bg-primary)]/50 mb-6">
                  <p className="text-xs text-[var(--theme-text-secondary)]">
                    <span className="text-[var(--theme-text-primary)] font-medium">Ideal for:</span> {pkg.idealFor}
                  </p>
                </div>

                <Button 
                  className={`w-full h-12 font-semibold ${pkg.popular ? 'bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628]' : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white'}`}
                  asChild
                  data-testid={`button-pricing-${pkg.id}`}
                >
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            {guarantees.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[var(--theme-bg-card)]/30 border border-[var(--theme-border)]/30 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-[var(--theme-text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--theme-text-secondary)]">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* FAQ Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[var(--theme-bg-card)] to-[var(--theme-bg-primary)] border border-[var(--theme-border)]">
              <h3 className="text-xl font-bold text-[var(--theme-text-primary)] mb-4">Not Sure Which Package?</h3>
              <p className="text-[var(--theme-text-secondary)] mb-6">
                Book a free 15-minute discovery call. We'll discuss your goals and I'll recommend 
                the right path for you. No pressure, no sales pitch.
              </p>
              <Button 
                variant="outline" 
                className="border-[#C9A227]/30 text-[#D4AF37] hover:bg-[#C9A227]/10"
                asChild
                data-testid="button-pricing-discovery"
              >
                <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Book Free Discovery Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
