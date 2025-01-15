"use client";
import React, { useState, useEffect } from "react";
import ProductList from "../../components/productlist";
import FooterSection from "@/components/footerSection";
import Navbar from "@/components/navbar";
import Dropdown from "../../components/ui/dropdown"; // Import the Dropdown component

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

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");

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

  useEffect(() => {
    const fetchProducts = (): Product[] => [
      {
        id: "1",
        imageUrl:
          "https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png",
        name: "Mobile Phone",
        price: "$199.99",
      },
      {
        id: "2",
        imageUrl:
          "https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png",
        name: "Laptop",
        price: "$899.99",
      },
      {
        id: "3",
        imageUrl:
          "https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png",
        name: "Tablet",
        price: "$299.99",
      },
      {
        id: "4",
        imageUrl:
          "https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png",
        name: "Headphones",
        price: "$49.99",
      },
    ];

    setProducts(fetchProducts());
  }, []);

  const handleBrandSelect = (brand: Option) => {
    setSelectedBrand(brand.label); // Set the selected brand label
  };

  const handleModelSelect = (model: Option) => {
    setSelectedModel(model.label); // Set the selected model label
  };

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center relative">
        <Navbar />
      </div>

      <div
        className="h-screen flex flex-col py-32 items-left "
        style={{ backgroundColor: "#F5F5DC" }}
      >
        <div className="h-auto flex flex-col md:flex-row lg:flex-row justify-start items-start gap-5 mt-8 px-4 lg:px-16">
          <div className="flex flex-col gap-4 sm:justify-start sm:items-start md:justify-start md:items-start lg:gap-4">
            {/* Brand section */}
            <p className="text-black font-gilroy-bold font-bold sm:text-2xl sm:text-left md:text-2xl lg:text-2xl leading-tight">
              Brand
              <span className="text-[#E07B39] inline-block relative">
                <span className="block w-full min-w-[140px]"></span>
              </span>
            </p>

            {/* Brand Dropdown component */}
            <Dropdown
              label="Choose your brand"
              options={brands}
              selectedOption={selectedBrand}
              onSelect={handleBrandSelect}
            />

            {/* Conditionally render the Model dropdown after a brand is selected */}
            {selectedBrand && (
              <>
                <p className="text-black font-gilroy-bold font-bold sm:text-2xl sm:text-left md:text-2xl lg:text-2xl leading-tight mt-4">
                  Model
                  <span className="text-[#E07B39] inline-block relative">
                    <span className="block w-full min-w-[140px]"></span>
                  </span>
                </p>

                {/* Model Dropdown component */}
                <Dropdown
                  label="Choose your model"
                  options={models}
                  selectedOption={selectedModel}
                  onSelect={handleModelSelect}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default ProductPage;
