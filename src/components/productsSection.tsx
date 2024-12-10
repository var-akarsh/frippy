"use client";

import { TypewriterEffectSmooth } from "./aceternity/typewriter-effect";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import matte from "../../public/images/products/matte.jpg"
import spigen from "../../public/images/products/spigen.jpg"
import iphoneTempered from "../../public/images/products/iphoneTempered.jpeg"
import privacy from "../../public/images/products/privacy.jpeg"
import metalRing from "../../public/images/products/metalRing.png"
import paperBack from "../../public/images/products/paperBack.png"
import androidTempered from "../../public/images/products/androidTempered.png"
import s23 from "../../public/images/products/s23.jpeg"

function ProductsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const words = [
    {
      text: "Explore",
    },
    {
      text: "Our",
    },
    {
      text: "Collection",
      className: "text-[#E07B39]",
    },
  ];

  return (
    <div className="bg-[#F5F5DC] py-7">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-4xl font-gilroy-bold text-black pb-5">
          <TypewriterEffectSmooth words={words} />
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] h-auto md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden p-4" // Updated padding and height
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <Image
                      priority
                      width={200}
                      height={200}
                      src={active.src}
                      alt={active.title}
                      className="w-full h-auto lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div>
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-base"
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-auto pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <ul className="mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
            {" "}
            {/* Adjusted grid layout */}
            {cards.map((card, index) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col bg-[#fff] hover:bg-[#DCE4C9] dark:hover:bg-[#DCE4C9] rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col w-full">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-60 w-full rounded-lg object-contain"
                      
                    />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </h2>
      </div>
    </div>
  );
}

export default ProductsSection;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Only at Rs. 7̶4̶9̶ 349",
    title: "Iphone Paper Thin MagSafe Back Cover",
    src: paperBack,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/8715820151832929/919466533162",
    content: () => {
      return (
        <p>
          A slim, paper-thin MagSafe compatible back cover that offers sleek protection without the bulk.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 9̶9̶9̶ 599",
    title: "Iphone Metal Ring Premium Magsafe Back Cover",
    src: metalRing,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/9002196176499684/919466533162",
    content: () => {
      return (
        <p>
          Premium protection with a built-in metal ring for added durability and MagSafe compatibility.
        </p>
      );
    },
  },

  {
    description: "Only at Rs. 9̶9̶9̶ 499",
    title: "Spigen Iphone Transparent Back Cover",
    src: spigen,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/28392816433638897/919466533162",
    content: () => {
      return (
        <p>
          Transparent, durable protection that showcases your iPhone’s design while safeguarding it from scratches.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 4̶9̶9̶ 249",
    title: "Iphone Ultra Shine Edge to Edge Screen Glass Protector",
    src: iphoneTempered,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/9215589318474150/919466533162",
    content: () => {
      return (
        <p>
          Protect your iPhone screen with this ultra-clear, edge-to-edge glass protector that enhances display clarity.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 6̶9̶9̶ 349",
    title: "Iphone 360° Privacy Screen Glass Protector",
    src: privacy,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/27616125851336167/919466533162",
    content: () => {
      return (
        <p>
          Keep your screen private with this 360° protection that prevents prying eyes from viewing your display.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 6̶9̶9̶ 349",
    title: "Iphone Matte Elegance Screen Glass Protector",
    src: matte,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/8900862156623726/919466533162",
    content: () => {
      return (
        <p>
          A matte finish glass protector that reduces glare and smudges, while offering solid protection.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 6̶9̶9̶ 349",
    title: "Samsung S22/S23 Optical Edge to Edge Screen Glass Protector",
    src: s23,
    ctaText: "Order",
    ctaLink: "https://wa.me/c/919466533162",
    content: () => {
      return (
        <p>
          Provide full coverage to your Samsung S22/S23 with this optical, edge-to-edge screen protector.
        </p>
      );
    },
  },
  {
    description: "Only at Rs. 4̶9̶9̶ 249",
    title: "Android Edge to Edge Screen Glass Protector",
    src: androidTempered,
    ctaText: "Order",
    ctaLink: "https://wa.me/p/9627233520626870/919466533162",
    content: () => {
      return (
        <p>
          Edge-to-edge protection for Android devices, offering maximum screen safety without compromising visibility.
        </p>
      );
    },
  },
];

