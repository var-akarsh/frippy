"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        "max-w-xs h-[380px] rounded-lg" // Increased the height a bit
      )}
    >
      {/* Title Section at the top of the card */}
      <div
        className={cn(
          "absolute top-0 left-4 right-4 bg-black/50 flex flex-col justify-center py-4 px-4 transition-opacity duration-300 z-10",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-2">
          {card.title}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-full">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0 rounded-lg" // Added rounded-lg for image corners
        />
      </div>

      <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
        <div className="text-sm text-white line-through">
        ₹{card.originalPrice}
        </div>
        <div className="text-xl text-white font-semibold">
        ₹{card.price}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: any;
  originalPrice: string; // Add original price
  price: string; // Add normal price
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
