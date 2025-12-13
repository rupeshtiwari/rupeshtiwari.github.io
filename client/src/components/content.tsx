import { motion } from "framer-motion";
import { Youtube, ExternalLink, BookOpen, Video, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = [
  {
    type: "Platform",
    icon: BookOpen,
    title: "FullstackMaster.net",
    desc: "Executive interview coaching for Directors, VPs, and Principal Engineers targeting FAANG.",
    link: "https://www.fullstackmaster.net",
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "Reviews",
    icon: Award,
    title: "IGotAnOffer",
    desc: "51+ verified reviews with 5.0 rating. See what clients say about their coaching experience.",
    link: "https://igotanoffer.com/en/coach/rupesh",
    color: "from-yellow-500 to-orange-500"
  },
  {
    type: "Blog",
    icon: FileText,
    title: "Technical Blog",
    desc: "In-depth articles on architecture, cloud patterns, and career growth strategies.",
    link: "https://blog.rupeshtiwari.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    type: "Video",
    icon: Youtube,
    title: "YouTube Channel",
    desc: "Free tutorials on system design, cloud architecture, and interview preparation.",
    link: "https://www.youtube.com/@FullStackMaster",
    color: "from-red-500 to-pink-500"
  }
];

export default function Content() {
  return (
    <section id="content" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Resources</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">Learn & Connect</h2>
          <p className="text-slate-400 text-lg">
            Free resources, coaching, and community for ambitious tech leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">{item.type}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                {item.desc}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                Visit <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
