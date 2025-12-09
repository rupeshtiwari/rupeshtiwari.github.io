import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PinnedProject from "@/components/pinned-project";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Understanding RxJS Marble Diagrams",
    excerpt: "Learn how to visualize RxJS observables and operators using marble diagrams for better testing and debugging.",
    date: "Dec 05, 2024",
    author: "Rupesh Tiwari",
    tags: ["Angular", "RxJS", "Testing"],
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Azure Solution Architect: Security Best Practices",
    excerpt: "A deep dive into securing your cloud infrastructure on Azure, covering identity management, network security, and data protection.",
    date: "Nov 28, 2024",
    author: "Rupesh Tiwari",
    tags: ["Azure", "Cloud", "Security"],
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Architecting resilient microservices using Node.js, Express, and Docker. Patterns for inter-service communication and data consistency.",
    date: "Nov 15, 2024",
    author: "Rupesh Tiwari",
    tags: ["Node.js", "Microservices", "Architecture"],
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Angular Monorepo Strategies with Nx",
    excerpt: "Managing large-scale Angular applications using Nx workspaces. Sharing code, enforcing boundaries, and optimizing builds.",
    date: "Oct 30, 2024",
    author: "Rupesh Tiwari",
    tags: ["Angular", "Nx", "DevOps"],
    readTime: "15 min read"
  },
  {
    id: 5,
    title: "GitHub Actions for CI/CD Pipelines",
    excerpt: "Automating your development workflow with GitHub Actions. Building, testing, and deploying applications to the cloud.",
    date: "Oct 12, 2024",
    author: "Rupesh Tiwari",
    tags: ["GitHub", "DevOps", "CI/CD"],
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Domain-Driven Design in Practice",
    excerpt: "Applying DDD principles to real-world software projects. Bounded contexts, aggregates, and domain events explained.",
    date: "Sep 25, 2024",
    author: "Rupesh Tiwari",
    tags: ["Architecture", "DDD", "Design Patterns"],
    readTime: "11 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Technical Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights on Cloud Architecture, Full Stack Development, and Software Design Patterns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-border/60">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl font-bold font-display leading-tight hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-xs mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="p-0 h-auto hover:text-primary font-medium group">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button size="lg" variant="outline" asChild>
                <a href="https://rupeshtiwari.github.io/" target="_blank" rel="noopener noreferrer">
                  View All Posts on GitHub Pages <ArrowRight className="ml-2 w-4 h-4" />
                </a>
             </Button>
          </div>
        </div>
      </main>

      <Footer />
      <PinnedProject />
    </div>
  );
}
