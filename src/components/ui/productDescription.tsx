"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductCarousel from "./productCarousel";
import Navbar from "../navbar";
import FooterSection from "../footerSection";

const product = {
  name: "Metal Ring Premium Magsafe Back Cover",
  price: "₹499",

  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  description:
    "Premium protection with a built-in metal ring for added durability and MagSafe compatibility.",
  highlights: [
    "360 Protection",
    "Magsafe Compatible",
    "Drop Protection",
    "Camera Protection",
  ],
  details:
    "Made from a blend of polycarbonate and TPU. Comes with a 1-year warranty. Free delivery on all orders.",
};

const reviews = { average: 4, totalCount: 23 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDescription() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const router = useRouter();

  const handleAddToBag = (event: any) => {
    event.preventDefault();
    router.push("/address");
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
                  mainImage="https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495509/frippy/mr1.webp.webp"
                  thumbnails={[
                    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495509/frippy/mr1.webp.webp",
                    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495512/frippy/mr2.webp.webp",
                    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495669/frippy/mr3.webp.webp",
                    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495671/frippy/mr4.webp.webp",
                    "https://res.cloudinary.com/dpt4om8vd/image/upload/v1738495673/frippy/mr5.webp.webp",
                  ]}
                />
              </div>

              {/* Right: Product Details */}
              <div className="lg:col-span-1 lg:self-start ml-10 mt-32">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>

                <p className="text-3xl tracking-tight text-gray-900 mt-2">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>

                {/* Color Selection */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center gap-x-3"
                    >
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden"
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "size-8 rounded-full border border-black/10 transition-all",
                              selectedColor.name === color.name
                                ? "ring-2 ring-black border-black scale-110"
                                : ""
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
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
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <p className="mt-4 text-sm text-gray-600">{product.details}</p>
              </div>
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
