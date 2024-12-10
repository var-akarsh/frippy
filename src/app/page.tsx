"use client";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import { Testimonials } from "@/components/Testimonials";
import FaqSection from "../components/faq";
import FooterSection from "../components/footerSection";

import IntroSection from "@/components/introSection";
import ProductsSection from "@/components/productsSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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
        <Testimonials />
      </div>
      <div id="products">
        <ProductsSection />
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
