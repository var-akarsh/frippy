"use client";

import { TypewriterEffectSmooth } from "./aceternity/typewriter-effect";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function ProductsSection() {
  const router = useRouter();
  const words = [
    { text: "Explore" },
    { text: "Our" },
    { text: "Collection", className: "text-[#E07B39]" },
  ];

  return (
    <div className="bg-[#F5F5DC] py-7">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-5xl font-gilroy-bold text-black pb-5">
          <TypewriterEffectSmooth words={words} />
        </h2>
      </div>
      <ul className="mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 p-4 md:p-8">
        {cards.map((card) => (
          <a
            key={card.title}
            onClick={() => router.push("/products")}
            className="p-4 flex flex-col bg-[#fff] rounded-xl cursor-pointer transition duration-300 hover:shadow-lg"
          >
            <div className="flex gap-4 flex-col w-full">
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full rounded-lg object-contain"
              />
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-medium text-neutral-800 text-center text-base">
                  {card.title}
                </h3>
                <p className="text-neutral-600 text-center text-base">
                  {card.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push("/products")}
          className="bg-[#E07B39] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d06932] transition duration-300"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ProductsSection;

const cards = [
  {
    description: "Starting at Rs.299/- only",
    title: "MagSafe Perfection: Premium iPhone Cases",
    src: "https://res.cloudinary.com/dpt4om8vd/image/upload/v1739707964/frippy/ip16_sst_display.webp.webp",
  },
  {
    description: "Starting at Rs.249/- only",
    title: "Smooth & Premium Glass Guards",
    src: "https://res.cloudinary.com/dpt4om8vd/image/upload/v1739386131/frippy/iphoneTemperedDisplay.webp.webp",
  },
  {
    description: "Starting at Rs.249/- only",
    title: "Ultra Soft Silicone Case - Sleek & Shockproof",
    src: "https://res.cloudinary.com/dpt4om8vd/image/upload/v1739816337/frippy/homepagesilicone.webp.webp",
  },
  {
    description: "Starting at Rs.299/- only",
    title: "True Transparent Cases: Sleek & Durable",
    src: "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738496595/frippy/tdisplay.webp.webp",
  }
];
