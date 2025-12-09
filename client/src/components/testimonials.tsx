import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Vaughn",
    role: "Software Engineer",
    company: "DraftKings",
    text: "THANK YOU RUPESH!!! I landed a role at DraftKings after Rupesh's coaching session. His OOD interview prep was exactly what I needed!",
    initials: "V"
  },
  {
    name: "Andre",
    role: "Solutions Architect",
    company: "Amazon",
    text: "Rupesh gave clear feedback on my technical answers and communication style, spotting weaknesses I missed. I recommend Rupesh to anyone preparing for a technical interview.",
    initials: "A"
  },
  {
    name: "Omotola",
    role: "Senior Engineer",
    company: "Red Hat",
    text: "Rupesh is patient, thorough, and a confidence-booster. I had an excellent experience learning from him!",
    initials: "O"
  },
  {
    name: "Karthik",
    role: "Senior Software Engineer",
    company: "FAANG",
    text: "Rupesh helped me crack my dream role! His insights on how to approach technical and behavioral rounds were spot-on.",
    initials: "K"
  },
  {
    name: "Ann",
    role: "Solutions Architect",
    company: "Databricks",
    text: "He holds a very high bar and treats each mock interview as seriously as if it were his own team's hiring process. The session was incredibly valuable.",
    initials: "A"
  },
  {
    name: "Shiv",
    role: "Senior SRE",
    company: "Google",
    text: "The session was very engaging... His questions focused not only on technical depth but also on collaboration, ownership, and leadership.",
    initials: "S"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Professionals Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by engineers and leaders who have successfully transitioned to top-tier tech roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">{item.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.role} @ {item.company}</div>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-primary/20" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{item.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
