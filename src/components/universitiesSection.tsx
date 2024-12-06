"use client";
import React from 'react';
import Air from "../../public/images/airbnb.png";
import Image from 'next/image';

const UniversitiesSection = () => {
  const logos = [
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
    { src: Air, alt: 'Airbnb' },
  ];

  return (
    <main>
      <div className="pt-8">
        <div className="text-center">
          <p className='flex justify-center text-4xl'>Make your alma one of them</p>
          <div className="w-full overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll gap-1">
              {logos.map((logo, index) => (
                <li key={index} className="mx-2">
                  <div className="animate-image">
                    {/* Set width and height to 100 */}
                    <Image src={logo.src} className='w-48 h-30' alt={logo.alt} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-image {
          animation: scroll 10s linear infinite;
          width: 150px;
          height: 140px;
        }
      `}</style>
    </main>
  )
};

export default UniversitiesSection;
