"use client";
import FeatureSection from "@/components/featureSection";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import FaqSection from "../components/faq";
import FooterSection from "../components/footerSection";

import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsMain";
import IntroSection from "@/components/introSection";
import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsMain";
import ProductsSection from "@/components/productsSection";

export default function Home() {
  return (
    <main>
      <div
        id="home"
        className="h-screen mx-auto bg-[#fff] flex justify-center pb-2 items-center relative"
      >
        <Navbar />
        <HeroSection />
      </div>
      <div id="why-frippy">
        <IntroSection />
      </div>
      <div id="testimonials" className="bg-[#f5f5dc]">
        <AnimatedTestimonialsDemo />
      </div>
      {/* <div id="testimonials">

      <div id="testimonials">
        <FeatureSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      </div> */}
      <div id="faq">
        <FaqSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </main>
  );
}
