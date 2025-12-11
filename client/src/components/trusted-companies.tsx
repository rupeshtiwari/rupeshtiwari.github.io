import { motion } from "framer-motion";
import { Cloud, Building2, Apple, Wifi, Package, Code2 } from "lucide-react";

const CompanyIcon = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300"
    title={name}
  >
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
    </div>
    <span className="text-xs font-semibold text-muted-foreground hidden md:block">{name}</span>
  </motion.div>
);

export default function TrustedCompanies() {
  return (
    <section className="py-8 md:py-12 bg-background border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Leadership Experience */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4 md:mb-8">
            Tech Strategy Leadership @ AWS
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Cloud className="w-10 h-10 md:w-14 md:h-14 text-primary" />
          </motion.div>
        </div>

        {/* Coaching Impact */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6 md:mb-12">
            Coaching Leaders From Top Tech Giants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
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
