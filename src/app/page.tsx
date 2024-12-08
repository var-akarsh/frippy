"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeatureSection from "@/components/featureSection";
import FaqSection from "../components/faq";
import FooterSection from "../components/footerSection";

import "./globals.css";
import IntroSection from "@/components/introSection";
import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import { AnimatedTestimonialsDemo } from "@/components/productSection";

export default function Home() {
  return (
    <main>
      <div id="home" className="h-screen mx-auto bg-[#fff] flex justify-center pb-2 items-center relative">
        <Navbar />
        <HeroSection />
      </div>
      <div id="why-frippy">
        <IntroSection />
      </div>
      <div id="products">
        <AnimatedTestimonialsDemo />
      </div>
      <div id="testimonials">
        <FeatureSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </main>
  );
}