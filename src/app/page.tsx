"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeatureSection from "@/components/featureSection";
import FaqSection from "../components/faq";
import FooterSection from "../components/footerSection";
import IntroSection from "@/components/introSection";
import IntroSectionNew from "@/components/introSectionNew";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <div className="h-screen mx-auto bg-[#fff] flex justify-center pb-2 items-center relative">
        <Navbar />
        <HeroSection />
      </div>
      <IntroSectionNew />
      {/* <IntroSection /> */}
      <FeatureSection />
      {/* <UniversitiesSection /> */}
      <FaqSection />
      {/* <UpcomingSection /> */}
      <FooterSection />
    </main>
  );
}
