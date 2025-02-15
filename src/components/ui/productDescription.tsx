"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductCarousel from "./productCarousel";
import Navbar from "../navbar";
import FooterSection from "../footerSection";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDescription({ product }: { product: any }) {
  // Filter out any image where the color is "Global" for the initial state
  const filteredImages = product.images.filter(
    (img: any) => img.color !== "Global"
  );

  // Store the selected color and its corresponding image URL
  const [selectedColor, setSelectedColor] = useState(
    filteredImages.length > 0 ? filteredImages[0].color : ""
  );
  const [colorByImage, setColorByImage] = useState(
    filteredImages.length > 0 ? filteredImages[0].imageUrl : ""
  );

  const router = useRouter();

  const handleAddToBag = (event: any) => {
    event.preventDefault();
    router.push("/address");
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    // Find the imageUrl for the selected color and update the state
    const selectedImage = filteredImages.find(
      (img: any) => img.color === color
    );
    if (selectedImage) {
      setColorByImage(selectedImage.imageUrl);
      console.log(
        "Selected color:",
        color + " Image URL:",
        selectedImage.imageUrl
      );
    }
  };

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center relative">
        <Navbar />
      </div>

      <div className="bg-white mt-12">
        <div className="pt-6">
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 lg:pb-24">
            {/* Large Screen Layout: Carousel Left, Details Right */}
            <div className="grid lg:grid-cols-2 lg:gap-x-8">
              {/* Left: Product Carousel */}
              <div className="lg:col-span-1">
                <ProductCarousel
                  mainImage={colorByImage} // Update the main image based on selected color
                  thumbnails={product.images.map((img: any) => img.imageUrl)}
                />
              </div>

              {/* Right: Product Details */}
              <div className="lg:col-span-1 lg:self-start ml-10 mt-32">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.productName}
                </h1>

                <p className="text-3xl tracking-tight text-gray-900 mt-2">
                  ₹{product.price}
                </p>

                {/* Reviews */}
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          4.5 > rating ? "text-gray-900" : "text-gray-200", // Hardcoded 4.5 rating
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">4.5 out of 5 stars</p>{" "}
                  {/* Hardcoded rating */}
                  <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    23 reviews
                  </a>{" "}
                  {/* Hardcoded review count */}
                </div>

                {/* Color Selection */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={handleColorChange} // Handle color change
                      className="flex items-center gap-x-3"
                    >
                      {filteredImages.map((img: any) => (
                        <Radio
                          key={img.color}
                          value={img.color}
                          aria-label={img.color}
                          className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden"
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              "size-8 rounded-full border border-black/10 transition-all",
                              selectedColor === img.color
                                ? "ring-2 ring-black border-black scale-110"
                                : ""
                            )}
                            style={{
                              backgroundColor: img.colorHexCode, // Use colorHexCode for color circle
                            }}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                  {/* Show Selected Color */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">
                      Chosen Color:{" "}
                      <span className="font-medium text-gray-900">
                        {selectedColor}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Order Now Button */}
                <form className="mt-10" onSubmit={handleAddToBag}>
                  <button
                    type="submit"
                    className="mt-5 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-[#E07B39] py-3 text-base font-medium text-white hover:bg-[#C15C2D] focus:ring-2 focus:ring-[#E07B39] focus:ring-offset-2 focus:outline-hidden"
                  >
                    Order Now!
                  </button>
                </form>
              </div>
            </div>

            {/* Below Carousel: Product Description */}
            <div className="mt-8 lg:mx-auto">
              {/* Highlights */}
              <div className="mt-10">
                <h3 className="text-3xl font-bold text-gray-900">
                  Product Highlights
                </h3>{" "}
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
                  {/* Hardcoded highlights */}
                  <li className="text-gray-900">
                    <span className="text-gray-900">360 Protection</span>
                  </li>
                  <li className="text-gray-900">
                    <span className="text-gray-900">Magsafe Compatible</span>
                  </li>
                  <li className="text-gray-900">
                    <span className="text-gray-900">Drop Protection</span>
                  </li>
                  <li className="text-gray-900">
                    <span className="text-gray-900">Camera Protection</span>
                  </li>
                </ul>
              </div>
              {/* Description  */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mt-6">
                  Description
                </h3>{" "}
                <div className="space-y-6 mt-3">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <FooterSection />
      </div>
    </>
  );
}
