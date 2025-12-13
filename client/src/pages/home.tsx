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
import Resources from "@/components/resources";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Programs />
        <Methodology />
        <Resources />
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
