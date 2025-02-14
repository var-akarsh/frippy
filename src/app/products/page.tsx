"use client";
import { Modal, ModalTrigger } from "@/components/aceternity/animated-modal";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Dropdown from "../../components/ui/dropdown"; // Import the Dropdown component

import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip";
import ProductsDisplay from "@/components/ui/productsDisplay";

import all from "../../../public/images/quickfilters/All.png";
import screenprotectors from "../../../public/images/quickfilters/ScreenProtectors.png";

import FooterSection from "@/components/footerSection";
import mobilecases from "../../../public/images/quickfilters/MOBILECASE.png";

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
  const [showProductCards, setShowProductCards] = useState<boolean>(false); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [brands, setBrands] = useState<Option[]>([]); 
  const [models, setModels] = useState<Option[]>([]); // Store models dynamically based on brand

  const handleFilterClick = (filter: any) => {
    setSelectedFilter(filter);
  };

  const fetchProducts = async (modelName: string) => {
    setLoading(true); // Set loading state
    try {
      const response = await fetch(
        `http://ec2-65-0-71-181.ap-south-1.compute.amazonaws.com:8080/product/getProductsByModel?modelName=${encodeURIComponent(
          modelName
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: Product[] = await response.json();
      setProducts(data);
      setShowProductCards(true); // Show product cards once data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  const handleFindItClick = () => {
    if (selectedModel) {
      fetchProducts(selectedModel);
    }
  };

  const productTypes: Option[] = [
    { value: "mobile", label: "Mobile" },
    { value: "laptop", label: "Laptop" },
    { value: "tablet", label: "Tablet" },
    { value: "accessories", label: "Accessories" },
  ];


  const handleBrandSelect = (brand: Option) => {
    setSelectedBrand(brand.label); 
    fetchModels(brand.label);
  };

  const handleModelSelect = (model: Option) => {
    setSelectedModel(model.label); // Set the selected model label
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://ec2-65-0-71-181.ap-south-1.compute.amazonaws.com:8080/brand");
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      const brandOptions = data.map((brand:any) => ({
        value: brand.brandName,
        label: brand.brandName,
      }));
      setBrands(brandOptions); 
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
    }
  };
  const fetchModels = async (brandName: string) => {
    try {
      const response = await fetch(
        `http://ec2-65-0-71-181.ap-south-1.compute.amazonaws.com:8080/phoneModel/getPhoneModelsByBrand?brandName=${encodeURIComponent(
          brandName
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }
      const data= await response.json();
      const modelOptions = data.map((model:any) => ({
        value: model.modelName,
        label: model.modelName,
      }));
      setModels(modelOptions); 
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
    }
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
              {products.length>0 && <AnimatedTooltip items={quickFilters} />}
            </div>
          </div>

          {products.length>0 && <ProductsDisplay cards={products} />}
        </div>
      </div>
      {!showProductCards && <FooterSection />}
    </>
  );
};

export default ProductPage;
