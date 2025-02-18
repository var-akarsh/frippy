"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface TooltipItem {
  id: number;
  name: string;
  image: any;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
  handleFilterClick: (name: string) => void;
}

export const AnimatedTooltip = ({ items, handleFilterClick }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); 
  };

  return (
    <>
      <div className="flex gap-8">
        {items.map((item, idx) => (
          <div 

            className="relative group cursor-pointer" 
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={()=> handleFilterClick(item.name)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex flex-col items-center">
              <Image
                onMouseMove={handleMouseMove}
                height={100}  
                width={100}   
                src={item.image}
                alt={item.name}
                className="object-cover !m-0 !p-0 object-top rounded-full h-24 w-24 border border-gray-200 group-hover:scale-105 group-hover:z-30 relative transition duration-500"  
              />
              {/* <span className="mt-2 text-gray-500 text-sm">{item.name}</span> */} 
              {/* //commented below title name */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
