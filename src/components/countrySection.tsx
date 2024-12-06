import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import countries from "../config/countryData.js";
import Image from "next/image.js";

const CountrySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === countries.length - 6 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 6 : prevIndex - 1
    );
  };

  return (
    <div className="pt-8 bg-zinc-950">
      <div className="flex items-center justify-center">
        <FaChevronLeft
          onClick={handlePrev}
          style={{ width: "50px", height: "100px" }}
          className="cursor-pointer text-white"
        />
        <div className="flex flex-wrap justify-center items-center relative">
          {countries
            .slice(activeIndex, activeIndex + 6)
            .map((country, index) => (
              <div key={index} className="relative group">
                <Image
                  src={country.imageUrl}
                  width={220}
                  height={220}
                  alt={`Flag of ${country.name}`}
                  className="rounded-full drop-shadow-2xl object-cover opacity-100 group-hover:opacity-5 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <p className="text-white text-4xl font-bold">{country.name}</p>
                </div>
              </div>
            ))}
        </div>
        <FaChevronRight
          onClick={handleNext}
          style={{ width: "50px", height: "100px" }}
          className="cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default CountrySection;
