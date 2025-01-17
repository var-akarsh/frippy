'use client';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/heroSection';
import FeatureSection from '@/components/featureSection';
// import UpcomingSection from '@/components/upcomingSection';
import UniversitiesSection from '../components/universitiesSection';
import FaqSection from '../components/faq'
import FooterSection from "../components/footerSections";
import IntroSection from '@/components/introSection';
import "./globals.css";
export default function Home() {
  return (
    <main>
      <div className="h-screen mx-auto bg-[#fff] flex justify-center pb-2 items-center relative">
        <Navbar />
        <HeroSection />
      </div>
      <IntroSection />
      <FeatureSection />
      {/* <UniversitiesSection /> */}
      <FaqSection />
      {/* <UpcomingSection /> */}
      <FooterSection />
    </main>
  );
}
