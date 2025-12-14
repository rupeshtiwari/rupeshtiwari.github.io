import { useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TableOfContents from "@/components/table-of-contents";
import BlogShareButtons from "@/components/blog-share-buttons";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "wouter";

const postsData: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  content: { id: string; title: string; level: number; text: string }[];
}> = {
  "1": {
    id: 1,
    title: "Understanding RxJS Marble Diagrams",
    excerpt: "Learn how to visualize RxJS observables and operators using marble diagrams for better testing and debugging.",
    date: "Dec 05, 2024",
    author: "Rupesh Tiwari",
    tags: ["Angular", "RxJS", "Testing"],
    readTime: "8 min read",
    content: [
      { id: "introduction", title: "Introduction", level: 2, text: "RxJS Marble Diagrams are a powerful visual tool for understanding and testing reactive streams. They provide a standardized way to represent the timing and values of Observable sequences over time. Whether you're debugging complex async operations or writing unit tests for your RxJS code, marble diagrams can significantly improve your productivity and code quality." },
      { id: "what-are-marble-diagrams", title: "What Are Marble Diagrams?", level: 2, text: "Marble diagrams are ASCII representations of Observable streams that show when values are emitted (the 'marbles'), what values are emitted, when the stream completes or errors, and the passage of time." },
      { id: "understanding-the-syntax", title: "Understanding the Syntax", level: 2, text: "The marble diagram syntax uses specific characters to represent different aspects of an Observable stream." },
      { id: "timeline-representation", title: "Timeline Representation", level: 3, text: "Each character in a marble diagram represents a 'frame' of virtual time. The hyphen (-) represents passing time without any emission. Example: ---a---b---c---|" },
      { id: "marble-values", title: "Marble Values", level: 3, text: "Lowercase letters represent emitted values. You can define what each letter means in your test configuration." },
      { id: "practical-examples", title: "Practical Examples", level: 2, text: "Let's look at some real-world examples of how marble diagrams can help you understand and test RxJS operators. The map operator transforms each value emitted by the source Observable." },
      { id: "testing-with-marbles", title: "Testing with Marbles", level: 2, text: "RxJS provides a TestScheduler that allows you to write synchronous tests for asynchronous code using marble diagrams." },
      { id: "common-patterns", title: "Common Patterns", level: 3, text: "Here are some common testing patterns you'll encounter when working with marble diagrams in your test suites." },
      { id: "best-practices", title: "Best Practices", level: 2, text: "Keep marble strings short and readable. Use meaningful value mappings. Test both success and error cases. Document complex marble diagrams." },
      { id: "conclusion", title: "Conclusion", level: 2, text: "Marble diagrams are an invaluable tool for any developer working with RxJS. They make it easier to visualize, understand, and test reactive streams. Start incorporating marble diagrams in your testing workflow today!" },
    ]
  },
  "2": {
    id: 2,
    title: "Azure Solution Architect: Security Best Practices",
    excerpt: "A deep dive into securing your cloud infrastructure on Azure, covering identity management, network security, and data protection.",
    date: "Nov 28, 2024",
    author: "Rupesh Tiwari",
    tags: ["Azure", "Cloud", "Security"],
    readTime: "12 min read",
    content: [
      { id: "introduction", title: "Introduction", level: 2, text: "Security is paramount when architecting solutions on Azure. This guide covers essential security practices for cloud infrastructure." },
      { id: "identity-management", title: "Identity Management", level: 2, text: "Azure Active Directory is the foundation of identity management in Azure. Implement proper RBAC and MFA for all users." },
      { id: "network-security", title: "Network Security", level: 2, text: "Use Virtual Networks, Network Security Groups, and Azure Firewall to protect your resources." },
      { id: "data-protection", title: "Data Protection", level: 2, text: "Encrypt data at rest and in transit. Use Azure Key Vault to manage secrets and certificates." },
      { id: "conclusion", title: "Conclusion", level: 2, text: "Following these security best practices will help you build secure and compliant cloud solutions on Azure." },
    ]
  }
};

const defaultPost = {
  id: 0,
  title: "Article Not Found",
  excerpt: "",
  date: "",
  author: "Rupesh Tiwari",
  tags: [],
  readTime: "",
  content: []
};

export default function BlogPost() {
  const contentRef = useRef<HTMLDivElement>(null);
  const params = useParams<{ id: string }>();
  const postId = params.id || "1";
  const post = postsData[postId] || defaultPost;
  
  const tocItems = post.content.map(section => ({
    id: section.id,
    title: section.title,
    level: section.level
  }));

  if (!postsData[postId]) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 print:pt-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 -ml-2 text-muted-foreground hover:text-foreground print:hidden">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4 print:hidden">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4" data-testid="blog-post-title">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div className="mb-8 print:hidden">
              <BlogShareButtons title={post.title} />
            </div>

            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              <article ref={contentRef} className="prose prose-slate dark:prose-invert max-w-none">
                {post.content.map((section) => (
                  <section key={section.id} id={section.id} className="mb-8">
                    {section.level === 2 ? (
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    ) : (
                      <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                    )}
                    <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                      {section.text}
                    </p>
                  </section>
                ))}
              </article>

              <aside className="hidden lg:block print:hidden">
                <div className="sticky top-24">
                  <TableOfContents items={tocItems} />
                </div>
              </aside>
            </div>

            <div className="mt-12 pt-8 border-t border-border print:hidden">
              <BlogShareButtons title={post.title} />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
