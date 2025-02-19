"use client";
import { Modal, ModalTrigger } from "@/components/aceternity/animated-modal";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Dropdown from "../../components/ui/dropdown";
import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip";
import ProductsDisplay from "@/components/ui/productsDisplay";
import all from "../../../public/images/quickfilters/All.png";
import screenprotectors from "../../../public/images/quickfilters/ScreenProtectors.png";
import FooterSection from "@/components/footerSection";
import mobilecases from "../../../public/images/quickfilters/MOBILECASE.png";
import { LoadingScreen } from "@/components/ui/loading";

type Product = {
  id: string;
  itemTypeName: string;
  imageUrl: string;
  name: string;
  price: string;
};

type Option = {
  value: string;
  label: string;
};

const quickFilters = [
  { id: 0, name: "All Products", image: all },
  { id: 1, name: "Screen Protector", image: screenprotectors },
  { id: 2, name: "Phone Case", image: mobilecases },
];

const ProductPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Products");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>(
    sessionStorage.getItem("selectedBrand") || ""
  );
  const [selectedModel, setSelectedModel] = useState<string>(
    sessionStorage.getItem("selectedModel") || ""
  );
  const [showProductCards, setShowProductCards] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [brands, setBrands] = useState<Option[]>([]);
  const [models, setModels] = useState<Option[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [previousProducts, setPreviousProducts] = useState<Product[]>(
    JSON.parse(sessionStorage.getItem("products") || "[]")
  );

  useEffect(() => {
    if (previousProducts.length > 0) {
      setProducts(previousProducts);
      setShowProductCards(true);
    }
  }, [previousProducts]);

  const handleFilterClick = (filter: any) => {
    setSelectedFilter(filter);
  };

  const fetchProducts = async (modelName: string) => {
    setLoading(true);
    const url = process.env.NEXT_PUBLIC_GETALL_PRODUCTS_BYMODEL!;
    try {
      const response = await fetch(
        `${url}?modelName=${encodeURIComponent(modelName)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: Product[] = await response.json();
      setProducts(data);
      setShowProductCards(true);
      sessionStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedFilter === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.itemTypeName === selectedFilter
      );
      setFilteredProducts(filtered);
    }
  }, [selectedFilter, products]);

  const handleFindItClick = () => {
    if (selectedModel) {
      fetchProducts(selectedModel);
    }
  };

  const handleBrandSelect = (brand: Option) => {
    setSelectedBrand(brand.label);
    sessionStorage.setItem("selectedBrand", brand.label);
    fetchModels(brand.label);
  };

  const handleModelSelect = (model: Option) => {
    setSelectedModel(model.label);
    sessionStorage.setItem("selectedModel", model.label);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const url = process.env.NEXT_PUBLIC_GETALL_BRANDS!;
    console.log("url", url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      const brandOptions = data.map((brand: any) => ({
        value: brand.brandName,
        label: brand.brandName,
      }));
      setBrands(brandOptions);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const fetchModels = async (brandName: string) => {
    const url = process.env.NEXT_PUBLIC_GETALL_MODELS_BYBRAND!;
    try {
      const response = await fetch(
        `${url}?brandName=${encodeURIComponent(brandName)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }
      const data = await response.json();
      const modelOptions = data.map((model: any) => ({
        value: model.modelName,
        label: model.modelName,
      }));
      setModels(modelOptions);
    } catch (error) {
      console.error("Error fetching models:", error);
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
                disabled={models.length === 0}
              />
            </div>

            {loading && (
              <p className="text-center mt-4 text-gray-600">
                <LoadingScreen />
              </p>
            )}

            {selectedBrand && selectedModel && (
              <div className="mt-6" onClick={handleFindItClick}>
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
              {products.length > 0 && (
                <AnimatedTooltip
                  handleFilterClick={handleFilterClick}
                  items={quickFilters}
                />
              )}
            </div>
          </div>

          {loading && <LoadingScreen />}

          {products.length > 0 && <ProductsDisplay cards={filteredProducts} />}
        </div>
      </div>

      {!showProductCards && <FooterSection />}
    </>
  );
};

export default ProductPage;
