"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ProductCarouselProps {
  mainImage: string;
  thumbnails: string[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  mainImage,
  thumbnails,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  // Update selectedImage whenever mainImage prop changes
  useEffect(() => {
    setSelectedImage(mainImage);
  }, [mainImage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="order-1">
        <img
          src={selectedImage}
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
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
