import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/features";
import Content from "@/components/content";
import Footer from "@/components/footer";
import PinnedProject from "@/components/pinned-project";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Content />
      </main>
      <Footer />
      <PinnedProject />
    </div>
  );
}
