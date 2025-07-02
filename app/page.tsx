import HeroSection from "./components/hero";
import ServicesSection from "./components/services";

export default function Home() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto text-white py-12">
      <HeroSection />
      <ServicesSection />
    </section>
  );
}
