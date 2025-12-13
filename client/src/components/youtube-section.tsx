import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink, Users, Eye, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "KhVzPwg2N9w",
    title: "System Design Interview: Complete Guide",
    views: "45K+ views",
    description: "Master system design interviews with this comprehensive approach used by FAANG engineers.",
  },
  {
    id: "H7XLPgVx5W0",
    title: "How to Answer Behavioral Questions",
    views: "32K+ views",
    description: "The STAR method isn't enough. Learn the advanced framework that gets you hired.",
  },
  {
    id: "SqL9FLz_mSA",
    title: "From Tier-3 College to FAANG",
    views: "28K+ views",
    description: "My personal story and the exact steps I took to crack Google, Microsoft, and AWS.",
  },
];

const channelStats = [
  { icon: Users, value: "15K+", label: "Subscribers" },
  { icon: Eye, value: "500K+", label: "Total Views" },
  { icon: Video, value: "100+", label: "Free Videos" },
];

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0F2341] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            <Youtube className="w-4 h-4" />
            Free Content
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
            Learn Before You Pay
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch my free YouTube content to see if my teaching style resonates with you. 
            No pressure, just value.
          </p>
        </motion.div>

        {/* Channel Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {channelStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`link-youtube-video-${idx}`}
              >
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-slate-800">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-xs">
                    {video.views}
                  </div>
                </div>
                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {video.description}
                </p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold h-14 px-8"
            asChild
            data-testid="button-youtube-subscribe"
          >
            <a href="https://www.youtube.com/@FullStackMaster?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe for Free Tips
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
