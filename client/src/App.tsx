import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FullStackMasterBanner from "@/components/fullstackmaster-banner";
import FloatingThemeToggle from "@/components/floating-theme-toggle";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Privacy from "@/pages/privacy";
import Resources from "@/pages/resources";
import CaseStudies from "@/pages/case-studies";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/resources" component={Resources} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FullStackMasterBanner />
        <Toaster />
        <FloatingThemeToggle />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
