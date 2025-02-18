'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Kahin pahunchne ke liye kahin se nikalna bahut zaroori hota hai.",
  "Hang tight, magic is on its way!",
  "Good things come to those who wait... but not too long!",
  "Jaldi kar kal subha Panvel nikalna hai!",
  "Zindagi mein kuchh banna ho toh 'kuchh' banna, par sabse bada 'kuchh' banna.",
  "Patience is a virtue, but so is excitement!",
  "Good things happen when you least expect them. Almost there!"
];

const colors = [
  "text-orange-600", 
  "text-purple-600", 
  "text-black",    

  "text-gray-600",    
  "text-blue-500", 
];

export const LoadingScreen = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(Math.floor(Math.random() * quotes.length));
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <AnimatePresence>
        <motion.div
          key={quoteIndex} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={`text-xl font-bold text-center ${colors[quoteIndex % colors.length]}`}
          >
          {` ${quotes[quoteIndex]} `}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
