import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="text-lg font-bold text-gray-800"
        initial={{ x: "-100%" }} 
        animate={{ x: "100%" }} 
        transition={{
          repeat: Infinity, 
          repeatType: "loop",
          duration: 2, 
          ease: "easeInOut",
        }}
        style={{ whiteSpace: "nowrap" }} 
      >
        Loading... Please Wait
      </motion.div>
    </div>
  );
};

export default Loading;
