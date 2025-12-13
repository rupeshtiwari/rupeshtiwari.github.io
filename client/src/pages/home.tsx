import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/features";
import Programs from "@/components/programs";
import Methodology from "@/components/methodology";
import Content from "@/components/content";
import Footer from "@/components/footer";
import TrustedCompanies from "@/components/trusted-companies";
import Testimonials from "@/components/testimonials";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Programs />
        <Methodology />
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
