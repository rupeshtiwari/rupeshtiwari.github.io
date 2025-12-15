import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [blogUrl, setBlogUrl] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const path = window.location.pathname;
    const blogPostPatterns = [
      /^\/posts\//,
      /^\/[a-z0-9-]+\/$/, 
      /^\/[0-9]{4}\/[0-9]{2}\//, 
    ];
    
    const looksLikeBlogPost = blogPostPatterns.some(pattern => pattern.test(path)) ||
      (path.length > 10 && path.includes('-') && !path.includes('.'));
    
    if (looksLikeBlogPost) {
      const cleanPath = path.replace(/^\/posts/, '').replace(/\/$/, '');
      const newBlogUrl = `https://blog.rupeshtiwari.com/posts${cleanPath}/`;
      setBlogUrl(newBlogUrl);
    }
  }, []);

  useEffect(() => {
    if (blogUrl && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (blogUrl && countdown === 0) {
      window.location.href = blogUrl;
    }
  }, [blogUrl, countdown]);

  if (blogUrl) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[var(--theme-bg-primary)]">
        <Card className="w-full max-w-lg mx-4 bg-[var(--theme-bg-card)] border-[var(--theme-border)]">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-cyan-400" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--theme-text-primary)] mb-2">Page Moved!</h1>
              <p className="text-[var(--theme-text-secondary)] mb-4">
                This content has moved to my blog. Redirecting in <span className="text-cyan-400 font-bold">{countdown}</span> seconds...
              </p>
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                asChild
              >
                <a href={blogUrl}>
                  Go to Blog Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <p className="text-[var(--theme-text-muted)] text-sm mt-4 break-all">
                {blogUrl}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--theme-bg-primary)]">
      <Card className="w-full max-w-md mx-4 bg-[var(--theme-bg-card)] border-[var(--theme-border)]">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-[var(--theme-text-primary)]">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-[var(--theme-text-secondary)]">
            The page you're looking for doesn't exist.
          </p>
          <Button 
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-slate-900"
            asChild
          >
            <a href="/">Go Home</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
