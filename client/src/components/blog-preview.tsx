import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink, Linkedin } from "lucide-react";
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
    <section id="blog-preview" className="py-24 bg-[var(--theme-bg-secondary)] relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[var(--theme-text-primary)]">
              Latest from the Blog
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:border-blue-500/50 w-fit"
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
              className="group p-6 rounded-2xl bg-[var(--theme-bg-card)]/50 border border-[var(--theme-border)]/50 hover:border-blue-500/30 transition-all"
              data-testid={`blog-post-${idx}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-[var(--theme-text-muted)] text-xs">{post.readTime}</span>
              </div>
              
              <h3 className="text-lg font-bold text-[var(--theme-text-primary)] mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}`, '_blank', 'width=600,height=600');
                  }}
                  className="p-1.5 rounded-lg text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                  title="Share to LinkedIn"
                  data-testid={`share-linkedin-${idx}`}
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
