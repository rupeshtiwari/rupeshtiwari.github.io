import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How to Answer 'Tell Me About Yourself' for Senior Roles",
    excerpt: "The biggest mistake senior engineers make is treating this as a chronological resume walkthrough. Here's the executive framework that works.",
    category: "Behavioral",
    readTime: "5 min read",
    url: "https://blog.rupeshtiwari.com/posts/tell-me-about-yourself/",
  },
  {
    title: "System Design Interview: The 4-Step Framework",
    excerpt: "Stop diving into solutions too early. Learn the structured approach that FAANG interviewers actually look for.",
    category: "System Design",
    readTime: "8 min read",
    url: "https://blog.rupeshtiwari.com/posts/system-design-framework/",
  },
  {
    title: "Why Senior Engineers Fail FAANG Interviews",
    excerpt: "After coaching 50+ senior engineers, I've identified the 5 patterns that cause experienced candidates to fail at top companies.",
    category: "Career",
    readTime: "6 min read",
    url: "https://blog.rupeshtiwari.com/posts/why-seniors-fail/",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Free Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Latest from the Blog
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-[#1E3A5F] text-slate-300 hover:text-white hover:border-blue-500/50 w-fit"
            asChild
            data-testid="button-view-all-posts"
          >
            <a href="https://blog.rupeshtiwari.com" target="_blank" rel="noopener noreferrer">
              View All Posts
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 hover:border-blue-500/30 transition-all"
              data-testid={`blog-post-${idx}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-slate-500 text-xs">{post.readTime}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
