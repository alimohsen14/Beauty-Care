import { HeroSection } from "../components/home/HeroSection";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { ServicesSection } from "../components/home/ServicesSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <ServicesSection />
    </>
  );
}
