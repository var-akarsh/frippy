"use client";
import React from "react";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footerSection";
import ContactSection from "@/components/ui/contact-section";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col">
      {/* Navbar */}
      <div className="w-full flex justify-center z-10 relative">
        <Navbar />
      </div>

      {/* Heading Above Contact Section */}
      <div className="mt-28 flex justify-center">
        <h2 className="text-3xl font-bold text-center text-[#E07B39]">
          We&apos;d Love to Hear From You
        </h2>
      </div>

      {/* Contact Section */}
      <div className="mb-8 flex justify-center w-full">
        <div className="max-w-7xl w-full">
          <ContactSection />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <FooterSection />
      </div>
    </div>
  );
};

export default Contact;
