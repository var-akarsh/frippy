"use client";
import React from "react";
import Hero from "../../public/images/hero_1.png";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./aceternity/FlipWords";
import { BackgroundBeamsWithCollision } from "./aceternity/BackgroundBeamsWithCollision";

const HeroSection = () => {
  // List of words to flip
  const words = ["You Relax", "Order Now"];

  return (
    <BackgroundBeamsWithCollision>

    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 mt-8 px-4 lg:px-16">
      {/* Text Section */}
      <div className="flex flex-col gap-4 sm:justify-center sm:items-center md:justify-center md:items-center lg:gap-8">
        <p className="text-black font-gilroy-bold font-bold sm:text-3xl sm:text-center md:text-center md:text-5xl lg:text-6xl mt-10 leading-tight">
          We Deliver <br /> We Install{" "} <br></br>
          <br className="lg:flex hidden text-blue-500" />
          <span className="text-[#E07B39] inline-block relative">
            {/* Ensure consistent width for FlipWords to prevent flicker */}
            <span className="block w-full min-w-[140px]">
              <FlipWords words={words} />
            </span>
          </span>
        </p>
        <p className="text-base sm:text-sm text-center md:text-center text-black font-medium mb-0 max-w-lg">
          Turn your passion and knowledge into a thriving business. <br />
          Help your audience get ahead in life.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/user_signup">
            <button className="py-2 px-6 bg-[#E07B39] rounded-md text-[#F5F5DC] font-gilroy-bold shadow-sm transition duration-200 hover:bg-[#d46c32] hover:text-white border-2 border-transparent hover:border-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-auto">
        <Image
          className="hidden md:hidden lg:block lg:ml-16 w-[320px] h-[320px] lg:w-[420px] lg:h-[400px] object-cover"
          src={Hero}
          alt="Hero Image"
        />
      </div>
    </div>
    </BackgroundBeamsWithCollision>

  );
};

export default HeroSection;
