import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/home/HeroSection";
import { CategoriesSection } from "./components/home/CategoriesSection";
import { ServicesSection } from "./components/home/ServicesSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ServicesSection />

      <Footer />
    </>
  );
}

export default App;
