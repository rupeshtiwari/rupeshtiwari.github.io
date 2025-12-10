import { motion } from "framer-motion";
import { Cloud, Building2, Apple, Wifi, Package, Code2 } from "lucide-react";

const CompanyIcon = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
    title={name}
  >
    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <span className="text-xs font-semibold text-muted-foreground">{name}</span>
  </motion.div>
);

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container mx-auto px-6">
        
        {/* Leadership Experience */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Tech Strategy Leadership @ AWS
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Cloud className="w-16 h-16 text-primary" />
          </motion.div>
        </div>

        {/* Coaching Impact */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-12">
            Coaching Leaders From Top Tech Giants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <CompanyIcon icon={Code2} name="Google" />
            <CompanyIcon icon={Building2} name="Meta" />
            <CompanyIcon icon={Apple} name="Apple" />
            <CompanyIcon icon={Wifi} name="Netflix" />
            <CompanyIcon icon={Package} name="Amazon" />
            <CompanyIcon icon={Code2} name="Microsoft" />
          </div>
        </div>

      </div>
    </section>
  );
}
