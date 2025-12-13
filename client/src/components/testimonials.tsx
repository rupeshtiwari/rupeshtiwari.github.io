import { motion } from "framer-motion";
import { Quote, Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Vaughn",
    role: "Software Engineer",
    company: "DraftKings",
    text: "THANK YOU RUPESH!!! I landed a role at DraftKings after Rupesh's coaching session. His OOD interview prep was exactly what I needed!",
    initials: "V",
    gotOffer: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Andre",
    role: "Solutions Architect",
    company: "Amazon",
    text: "Rupesh gave clear feedback on my technical answers and communication style, spotting weaknesses I missed. I recommend Rupesh to anyone preparing for a technical interview.",
    initials: "A",
    gotOffer: true,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Omotola",
    role: "Senior Engineer",
    company: "Red Hat",
    text: "Rupesh is patient, thorough, and a confidence-booster. I had an excellent experience learning from him!",
    initials: "O",
    gotOffer: true,
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Karthik",
    role: "Senior Software Engineer",
    company: "FAANG",
    text: "Rupesh helped me crack my dream role! His insights on how to approach technical and behavioral rounds were spot-on.",
    initials: "K",
    gotOffer: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Ann",
    role: "Solutions Architect",
    company: "Databricks",
    text: "He holds a very high bar and treats each mock interview as seriously as if it were his own team's hiring process. The session was incredibly valuable.",
    initials: "A",
    gotOffer: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Shiv",
    role: "Senior SRE",
    company: "Google",
    text: "The session was very engaging... His questions focused not only on technical depth but also on collaboration, ownership, and leadership.",
    initials: "S",
    gotOffer: false,
    color: "from-blue-600 to-indigo-600"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Verified Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Leaders Who Landed Offers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real coaching clients. Real offers. Every review verified on IGotAnOffer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:bg-slate-800/80">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <span className="text-white text-lg font-bold">{item.initials}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-sm text-slate-400">{item.role} @ {item.company}</div>
                    </div>
                  </div>
                  {item.gotOffer && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Got Offer
                    </span>
                  )}
                </div>
                
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-xl">5.0 Average Rating</div>
              <div className="text-slate-400">51+ Verified Reviews on IGotAnOffer</div>
            </div>
            <Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 ml-4" asChild>
              <a href="https://igotanoffer.com/en/coach/rupesh" target="_blank" rel="noopener noreferrer">
                Verify All Reviews <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
