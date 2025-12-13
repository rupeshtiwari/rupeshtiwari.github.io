import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/features";
import Content from "@/components/content";
import Footer from "@/components/footer";
import TrustedCompanies from "@/components/trusted-companies";
import Testimonials from "@/components/testimonials";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <About />
        <Skills />
        <Testimonials />
        <Content />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
