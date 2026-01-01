import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <ServicesSection />
      <CTASection />
    </main>
  );
}

