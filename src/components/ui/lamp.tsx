"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative pt-[250px] px-[200px] pb-[80px] flex h-[0px] flex-col items-center justify-center overflow-hidden bg-black w-full",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-950 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-950 text-white [--conic-position:from_290deg_at_center_top] pt-6"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/* <div className="absolute top-1/2 h-10 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div> */}
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto h-10 w-[28rem] -translate-y-1/3 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-900 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-900 "
        ></motion.div>

        <div className="absolute inset-auto h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative flex -translate-y-24 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
