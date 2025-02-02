"use client";
import { Modal, ModalTrigger } from "@/components/aceternity/animated-modal";
import { FocusCards } from "@/components/aceternity/focus-card";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Dropdown from "../../components/ui/dropdown"; // Import the Dropdown component

import androidTempered from "../../../public/images/products/androidTempered.png";
import iphoneTempered from "../../../public/images/products/iphoneTempered.jpeg";
import matte from "../../../public/images/products/matte.jpg";
import metalRing from "../../../public/images/products/metalRing.png";
import paperBack from "../../../public/images/products/paperBack.png";
import privacy from "../../../public/images/products/privacy.jpeg";
import s23 from "../../../public/images/products/s23.jpeg";
import silicone from "../../../public/images/products/silicone.jpeg";
import spigen from "../../../public/images/products/spigen.jpg";
import ProductsDisplay from "@/components/ui/productsDisplay";
import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip";

import all from "../../../public/images/quickfilters/All.png";
import screenprotectors from "../../../public/images/quickfilters/ScreenProtectors.png";

import mobilecases from "../../../public/images/quickfilters/MOBILECASE.png";
import FooterSection from "@/components/footerSection";

type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
};

type Option = {
  value: string;
  label: string;
};

const cards = [
  {
    price: "349",
    title: "Iphone Silicone Back Cover",
    src: silicone,
    originalPrice: "699",
  },
  {
    price: "349",
    title: "Iphone Paper Thin MagSafe Back Cover",
    src: paperBack,
    originalPrice: "699",
  },
  {
    price: "599",
    title: "Iphone Metal Ring Premium Magsafe Back Cover",
    src: metalRing,
    originalPrice: "1199",
  },
  {
    price: "499",
    title: "Spigen Iphone Transparent Back Cover",
    src: spigen,
    originalPrice: "999",
  },
  {
    price: "249",
    title: "Iphone Ultra Shine Edge to Edge Screen Glass Protector",
    src: iphoneTempered,
    originalPrice: "499",
  },
  {
    price: "349",
    title: "Iphone 360° Privacy Screen Glass Protector",
    src: privacy,
    originalPrice: "699",
  },
  {
    price: "349",
    title: "Iphone Matte Elegance Screen Glass Protector",
    src: matte,
    originalPrice: "699",
  },
  {
    price: "349",
    title: "Samsung S22/S23 Optical Edge to Edge Screen Glass Protector",
    src: s23,
    originalPrice: "699",
  },
  {
    price: "249",
    title: "Android Edge to Edge Screen Glass Protector",
    src: androidTempered,
    originalPrice: "499",
  },
];

// Define your filter options
const quickFilters = [
  {
    id: 0,
    name: "All Products",
    image: all,
  },
  {
    id: 1,
    name: "Screen Protectors",
    image: screenprotectors,
  },
  {
    id: 2,
    name: "Mobile Cases",
    image: mobilecases,
  },
];

const ProductPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [showProductCards, setShowProductCards] = useState<boolean>(false); // New state for showing the cards

  const handleFilterClick = (filter: any) => {
    setSelectedFilter(filter);
  };

  const productTypes: Option[] = [
    { value: "mobile", label: "Mobile" },
    { value: "laptop", label: "Laptop" },
    { value: "tablet", label: "Tablet" },
    { value: "accessories", label: "Accessories" },
  ];

  const brands: Option[] = [
    { value: "samsung", label: "Samsung" },
    { value: "apple", label: "Apple" },
    { value: "xiaomi", label: "Xiaomi" },
    { value: "oneplus", label: "OnePlus" },
  ];

  const models: Option[] = [
    { value: "model-1", label: "Model 1" },
    { value: "model-2", label: "Model 2" },
    { value: "model-3", label: "Model 3" },
    { value: "model-4", label: "Model 4" },
  ];

  const handleBrandSelect = (brand: Option) => {
    setSelectedBrand(brand.label); // Set the selected brand label
  };

  const handleModelSelect = (model: Option) => {
    setSelectedModel(model.label); // Set the selected model label
  };

  const handleFindItClick = () => {
    console.log("Find It clicked");
    setShowProductCards(true); // Show the product cards when "Find It!" is clicked
  };

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center relative">
        <Navbar />
      </div>

      <div
        className="h-screen flex flex-col py-32 items-left"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="h-auto flex flex-col md:flex-row lg:flex-row justify-start items-start gap-5 mt-8 px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:gap-x-96 gap-4 sm:justify-start sm:items-start md:justify-start md:items-start lg:gap-4 w-full">
            <div className="flex flex-col">
              <p className="text-black font-gilroy-bold font-bold sm:text-2xl sm:text-left md:text-2xl lg:text-2xl leading-tight">
                Brand
                <span className="text-[#E07B39] inline-block relative">
                  <span className="block w-full md:w-[140%] lg:w-[250%]"></span>
                </span>
              </p>

              <Dropdown
                label="Choose your brand"
                options={brands}
                selectedOption={selectedBrand}
                onSelect={handleBrandSelect}
              />
            </div>

            {
              <div className="flex flex-col">
                <p className="text-black font-gilroy-bold font-bold sm:text-2xl sm:text-left md:text-2xl lg:text-2xl leading-tight">
                  Model
                  <span className="text-[#E07B39] inline-block relative">
                    <span className="block md:w-[140%] lg:w-[250%]"></span>
                  </span>
                </p>

                <Dropdown
                  label="Choose your model"
                  options={models}
                  selectedOption={selectedModel}
                  onSelect={handleModelSelect}
                />
              </div>
            }
            {selectedBrand && selectedModel && (
              <div
                className="mt-6"
                onClick={handleFindItClick} // Show the product cards when button is clicked
              >
                <Modal>
                  <ModalTrigger className="bg-[#E07B39] dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                      Find It!
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      🔍
                    </div>
                  </ModalTrigger>
                </Modal>
              </div>
            )}
          </div>
        </div>
        <div className="mt-16">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              {showProductCards && <AnimatedTooltip items={quickFilters} />}
            </div>
          </div>

          {showProductCards && <ProductsDisplay cards={cards} />}
        </div>
      </div>
      {!showProductCards && <FooterSection/>}
     
      
    </>
  );
};

export default ProductPage;
