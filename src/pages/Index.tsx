import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductShowcase from "@/components/ProductShowcase";
import CustomizationPreview from "@/components/CustomizationPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductShowcase />
        <CustomizationPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
