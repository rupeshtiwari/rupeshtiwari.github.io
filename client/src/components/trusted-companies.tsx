import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const companies = ["Amazon", "Google", "Meta", "Apple", "Netflix", "Microsoft"];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Helping Leaders Land Offers At
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-lg font-semibold">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
