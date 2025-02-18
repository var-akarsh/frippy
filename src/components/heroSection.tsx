"use client";
import React, { useEffect, useState } from "react";
import Hero from "../../public/images/hero_1.png";
import Image from "next/image";
import { FlipWords } from "./aceternity/FlipWords";
import { BackgroundBeamsWithCollision } from "./aceternity/BackgroundBeamsWithCollision";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const words = ["You Relax", "Order Now"];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOrderClick = () => {
    router.push("/products"); // Navigate to /products page
  };

  if (!isClient) return null;

  return (
    <BackgroundBeamsWithCollision>
      <div className="h-screen flex flex-col md:flex-row lg:flex-row justify-center lg:justify-between items-center gap-5 mt-8 px-4 lg:px-16">
        {/* Text Section */}
        <div className="flex flex-col gap-4 sm:justify-center sm:items-center md:justify-center md:items-center lg:gap-8">
          <p className="text-black font-gilroy-bold font-bold sm:text-3xl sm:text-left sm:text-5xl md:text-6xl lg:text-6xl mt-10 leading-tight">
            We Deliver <br /> We Install <br />
            <span className="text-[#E07B39] inline-block relative">
              <span className="block w-full min-w-[140px]">
                <FlipWords words={words} />
              </span>
            </span>
          </p>
          <p className="text-lg sm:text-xl sm:text-base text-left sm:text-center text-gray-700 font-medium mb-0 max-w-lg">
            Doorstep Free delivery and installation of mobile screen <br />
            guards, back cover, and more.
          </p>
          <div className="flex justify-start gap-4">
            <button
              onClick={handleOrderClick}
              className="py-2 px-6 bg-[#E07B39] rounded-md text-[#F5F5DC] font-gilroy-bold shadow-sm transition duration-200 hover:bg-[#d46c32] hover:text-white border-2 border-transparent hover:border-black sm:mt-10"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto lg:w-auto">
          <Image
            className="hidden sm:hidden md:block lg:block lg:ml-16 w-[320px] h-[320px] lg:w-[420px] lg:h-[400px] object-cover"
            src={Hero}
            alt="Hero Image"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
