import { motion } from "framer-motion";
import { Youtube, ExternalLink, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = [
  {
    type: "Course",
    icon: Video,
    title: "RxJS Unit Testing",
    desc: "Master marble diagrams and unit testing strategies for reactive applications on Pluralsight.",
    link: "https://www.pluralsight.com/authors/rupesh-tiwari"
  },
  {
    type: "Community",
    icon: BookOpen,
    title: "Fullstack Master",
    desc: "Comprehensive training platform helping developers become full-stack experts.",
    link: "https://www.fullstackmaster.net"
  },
  {
    type: "Blog",
    icon: ExternalLink,
    title: "Medium Blog",
    desc: "In-depth articles on Angular, Architecture, and Cloud patterns.",
    link: "https://medium.com/rupesh-tiwari"
  },
  {
    type: "Video",
    icon: Youtube,
    title: "YouTube Channel",
    desc: "Free tutorials on web development, system design, and career advice.",
    link: "https://www.youtube.com/c/RupeshTiwari"
  }
];

export default function Content() {
  return (
    <section id="content" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Latest Content</h2>
          <p className="text-muted-foreground text-lg">
            Sharing knowledge through courses, articles, and videos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.type}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {item.desc}
              </p>
              <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-primary transition-colors" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Learn More <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
