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
import ResourcesSection from "@/components/resources";
import MyJourney from "@/components/my-journey";
import FamilySection from "@/components/family-section";
import LeadMagnet from "@/components/lead-magnet";
import ClientResults from "@/components/client-results";
import YouTubeSection from "@/components/youtube-section";
import Newsletter from "@/components/newsletter";
import FAQ from "@/components/faq";
import BlogPreview from "@/components/blog-preview";
import UrgencyBanner from "@/components/urgency-banner";
import ExitPopup from "@/components/exit-popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <UrgencyBanner />
        <TrustedCompanies />
        <MyJourney />
        <ClientResults />
        <Programs />
        <LeadMagnet />
        <Methodology />
        <YouTubeSection />
        <BlogPreview />
        <ResourcesSection />
        <About />
        <FamilySection />
        <Skills />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Content />
      </main>
      <Footer />
      <FloatingButtons />
      <ExitPopup />
    </div>
  );
}
