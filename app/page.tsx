import CaseStudiesSection from "./components/case-studies";
import CTASection from "./components/cta-section";
import FeaturesSection from "./components/features/feature-section";
import FoundersSection from "./components/founders";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";
import StatsSection from "./components/stats";
import WhyChooseUsSection from "./components/why-choose-us";

export default function Home() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto text-white py-12">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <FoundersSection />
      <CTASection />
    </section>
  );
}
