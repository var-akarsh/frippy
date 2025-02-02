"use client";
import React, { useState } from "react";

const ProductCarousel = () => {
  const [mainImage, setMainImage] = useState(
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495509/frippy/mr1.webp.webp"
  );

  const thumbnails = [
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495509/frippy/mr1.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495512/frippy/mr2.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495669/frippy/mr3.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495671/frippy/mr4.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495673/frippy/mr5.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495673/frippy/mr5.webp.webp",
    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495673/frippy/mr5.webp.webp",


  ];

  const handleChangeImage = (src: string) => {
    setMainImage(src);
  };

  return (
    <div className="container   mx-auto px-4 py-8">
      {/* <div className="grid  flex flex-col md:grid-cols-2 gap-8"> */}
        <div className="order-1">
          <img
            src={mainImage}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="flex gap-4 py-4 justify-center overflow-x-auto">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => handleChangeImage(src)}
              />
            ))}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ProductCarousel;
