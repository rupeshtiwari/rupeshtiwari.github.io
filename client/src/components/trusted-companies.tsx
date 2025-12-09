import { motion } from "framer-motion";
import awsLogo from "@/assets/stock_images/aws_logo_b5cc0ad1.jpg";
import googleLogo from "@/assets/stock_images/google_logo_598fc73a.jpg";
import metaLogo from "@/assets/stock_images/meta_logo_e7f9c5e8.jpg";
import appleLogo from "@/assets/stock_images/apple_logo_af108140.jpg";
import netflixLogo from "@/assets/stock_images/netflix_logo_59996cca.jpg";
import microsoftLogo from "@/assets/stock_images/microsoft_logo_7b40bfd3.jpg";

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container mx-auto px-6">
        
        {/* Leadership Experience */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Tech Strategy Leadership Experience
          </p>
          <div className="flex justify-center items-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="h-16 flex items-center"
             >
               <img src={awsLogo} alt="AWS" className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-screen" />
             </motion.div>
          </div>
        </div>

        {/* Coaching Impact */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Coaching Leaders From Top Tech Giants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              { name: "Google", logo: googleLogo },
              { name: "Meta", logo: metaLogo },
              { name: "Apple", logo: appleLogo },
              { name: "Netflix", logo: netflixLogo },
              { name: "Amazon", logo: awsLogo }, // Reusing AWS logo for Amazon
              { name: "Microsoft", logo: microsoftLogo }
            ].map((company, idx) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
