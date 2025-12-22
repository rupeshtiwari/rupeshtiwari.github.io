import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink, Users, Eye, Video, ListVideo } from "lucide-react";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    id: "PLZed_adPqIJqdUI07gmFg4vBBYtx6ta_f",
    title: "Amazon Behavioral Interview Mastery",
    category: "Behavioral",
    videos: "25+ videos",
    description: "Master Amazon Leadership Principles and behavioral interviews with real examples.",
  },
  {
    id: "PLZed_adPqIJrhB1lo3F65IjnOhgMHUR4C",
    title: "System Design Mastery Shorts",
    category: "System Design",
    videos: "40+ videos",
    description: "Quick system design concepts and patterns used by FAANG engineers.",
  },
  {
    id: "PLZed_adPqIJrfsK5cfoMyqyS58VRJ_Liu",
    title: "Engineering Manager Interview Prep",
    category: "EM Leadership",
    videos: "30+ videos",
    description: "System design and leadership interviews for Engineering Managers.",
  },
  {
    id: "PLZed_adPqIJqVHAdy69B6BUNagto2dLI2",
    title: "TPM Interview Coaching",
    category: "TPM",
    videos: "20+ videos",
    description: "Technical Program Manager interview prep for Google and FAANG.",
  },
  {
    id: "PLZed_adPqIJpMrZnvVI6qBgnahpRrYXrp",
    title: "Senior Director Interview Kickstart",
    category: "Director",
    videos: "15+ videos",
    description: "Executive interview preparation for Director and VP roles.",
  },
  {
    id: "PLZed_adPqIJpZ2mf0o9DRSieapJW_ShhZ",
    title: "SWE Interview Prep",
    category: "SWE",
    videos: "35+ videos",
    description: "Coding, system design, and leadership principles for Software Engineers.",
  },
];

const channelStats = [
  { icon: Users, value: "15K+", label: "Subscribers" },
  { icon: Eye, value: "500K+", label: "Total Views" },
  { icon: Video, value: "100+", label: "Free Videos" },
];

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 bg-gradient-to-b from-[var(--theme-bg-secondary)] to-[var(--theme-bg-card)] relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-[var(--theme-text-primary)]">
            Learn Before You Pay
          </h2>
          <p className="text-[var(--theme-text-muted)] text-lg max-w-2xl mx-auto">
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
                <div className="text-xl font-bold text-[var(--theme-text-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--theme-text-muted)]">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Playlist Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {playlists.map((playlist, idx) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <a 
                href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[var(--theme-bg-card)] rounded-xl border border-[var(--theme-border)] overflow-hidden hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10"
                data-testid={`link-youtube-playlist-${idx}`}
              >
                <div className="relative p-6 bg-gradient-to-br from-red-600 to-red-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-white/20 rounded text-white text-xs font-medium">
                      {playlist.category}
                    </span>
                    <ListVideo className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{playlist.videos}</div>
                      <div className="text-white/70 text-sm">Watch Free</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--theme-text-primary)] group-hover:text-red-500 transition-colors mb-2 line-clamp-2">
                    {playlist.title}
                  </h3>
                  <p className="text-sm text-[var(--theme-text-muted)] line-clamp-2">
                    {playlist.description}
                  </p>
                </div>
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
