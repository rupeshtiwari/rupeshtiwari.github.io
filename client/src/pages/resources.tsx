import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Youtube, 
  FileText, 
  Download, 
  ExternalLink, 
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const resources = {
  guides: [
    {
      title: "The FAANG Interview Blueprint",
      description: "42-page guide with the exact framework I used to crack Google, Microsoft, and AWS.",
      type: "PDF Guide",
      cta: "Download Free",
      link: "#free-guide",
      icon: FileText,
      featured: true,
    },
  ],
  videos: [
    {
      title: "System Design Interview: Complete Guide",
      description: "Master system design interviews with this comprehensive approach.",
      views: "45K+ views",
      link: "https://www.youtube.com/watch?v=KhVzPwg2N9w",
    },
    {
      title: "How to Answer Behavioral Questions",
      description: "The STAR method isn't enough. Learn the advanced framework.",
      views: "32K+ views",
      link: "https://www.youtube.com/watch?v=H7XLPgVx5W0",
    },
    {
      title: "From Tier-3 College to FAANG",
      description: "My personal story and the exact steps I took.",
      views: "28K+ views",
      link: "https://www.youtube.com/watch?v=SqL9FLz_mSA",
    },
  ],
  articles: [
    {
      title: "How to Answer 'Tell Me About Yourself'",
      category: "Behavioral",
      link: "https://blog.rupeshtiwari.com",
    },
    {
      title: "System Design: The 4-Step Framework",
      category: "System Design",
      link: "https://blog.rupeshtiwari.com",
    },
    {
      title: "Why Senior Engineers Fail FAANG Interviews",
      category: "Career",
      link: "https://blog.rupeshtiwari.com",
    },
    {
      title: "Salary Negotiation Scripts That Work",
      category: "Negotiation",
      link: "https://blog.rupeshtiwari.com",
    },
    {
      title: "Leadership Principles Deep Dive",
      category: "Amazon",
      link: "https://blog.rupeshtiwari.com",
    },
    {
      title: "Googleyness: What It Really Means",
      category: "Google",
      link: "https://blog.rupeshtiwari.com",
    },
  ],
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-primary)] text-[var(--theme-text-primary)]">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4 text-[var(--theme-text-primary)]">
              Learn for Free. Invest When Ready.
            </h1>
            <p className="text-xl text-[var(--theme-text-secondary)]">
              Hundreds of free resources to help you prepare for your next big interview. 
              No gatekeeping, no paywalls on fundamentals.
            </p>
          </motion.div>

          {/* Featured Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[var(--theme-gold)]/10 to-[var(--theme-gold)]/5 border border-[var(--theme-gold)]/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center shrink-0">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-[#D4AF37] text-sm font-medium mb-1">Featured Free Guide</div>
                  <h2 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2">The FAANG Interview Blueprint</h2>
                  <p className="text-[var(--theme-text-secondary)] mb-4">
                    42 pages of actionable insights. The exact framework I used to crack Google, Microsoft, and AWS.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                    {["5 Behavioral Frameworks", "System Design Template", "Negotiation Scripts"].map((item, i) => (
                      <span key={i} className="flex items-center gap-1 text-sm text-[var(--theme-text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#0A1628] font-bold shrink-0"
                  asChild
                  data-testid="button-resources-download"
                >
                  <a href="/#free-guide">
                    <Download className="w-5 h-5 mr-2" />
                    Download Free
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* YouTube Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--theme-text-primary)]">YouTube Videos</h2>
              </div>
              <Button variant="ghost" className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]" asChild>
                <a href="https://www.youtube.com/@FullStackMaster" target="_blank" rel="noopener noreferrer">
                  View All <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resources.videos.map((video, idx) => (
                <a
                  key={idx}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-red-500/30 transition-colors"
                  data-testid={`resource-video-${idx}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                    <span className="text-[var(--theme-text-muted)] text-sm">{video.views}</span>
                  </div>
                  <h3 className="font-bold text-[var(--theme-text-primary)] group-hover:text-red-400 transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[var(--theme-text-secondary)]">{video.description}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Blog Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--theme-text-primary)]">Blog Articles</h2>
              </div>
              <Button variant="ghost" className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]" asChild>
                <a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer">
                  View All <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.articles.map((article, idx) => (
                <a
                  key={idx}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-blue-500/30 transition-colors flex items-center gap-4"
                  data-testid={`resource-article-${idx}`}
                >
                  <div className="flex-1">
                    <span className="text-xs text-blue-400 font-medium">{article.category}</span>
                    <h3 className="font-medium text-[var(--theme-text-primary)] group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
