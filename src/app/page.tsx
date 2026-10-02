import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import Popular from "@/components/Popular";
import Menu from "@/components/Menu";
import Promotions from "@/components/Promotions";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Branches from "@/components/Branches";
import Reviews from "@/components/Reviews";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CartFeedback from "@/components/CartFeedback";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* DISCOVER */}
        <Hero />
        <CategoryStrip />
        {/* EXPLORE FOOD → CHOOSE */}
        <Popular />
        <Menu />
        <Promotions />
        {/* TRUST */}
        <About />
        <WhyUs />
        {/* FIND BRANCH / ORDER */}
        <Branches />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
      <CartDrawer />
      <CartFeedback />
    </>
  );
}
