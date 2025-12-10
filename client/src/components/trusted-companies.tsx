import { motion } from "framer-motion";

export default function TrustedCompanies() {

  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container mx-auto px-6">
        
        {/* Leadership Experience */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Tech Strategy Leadership @ AWS
          </p>
          <div className="text-4xl font-bold text-primary">☁️</div>
        </div>

        {/* Coaching Impact */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Coaching Leaders From Top Tech Giants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              { name: "Google", emoji: "🔍" },
              { name: "Meta", emoji: "👥" },
              { name: "Apple", emoji: "🍎" },
              { name: "Netflix", emoji: "🎬" },
              { name: "Amazon", emoji: "📦" },
              { name: "Microsoft", emoji: "💻" }
            ].map((company, idx) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-3xl hover:scale-110 transition-transform duration-300"
              >
                <span title={company.name}>{company.emoji}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
