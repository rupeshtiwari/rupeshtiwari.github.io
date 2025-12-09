import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const awsLogo = "/assets/aws-logo.png";
  const googleLogo = "/assets/google-logo.png";
  const metaLogo = "/assets/meta-logo.png";
  const appleLogo = "/assets/apple-logo.png";
  const netflixLogo = "/assets/netflix-logo.png";
  const microsoftLogo = "/assets/microsoft-logo.png";
  const amazonLogo = "/assets/amazon-logo.png";

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
              { name: "Amazon", logo: amazonLogo },
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
