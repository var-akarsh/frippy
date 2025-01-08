"use client"
import React, { useState, useEffect } from 'react';
import ProductList from '../../components/productlist';

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

  const productTypes: Option[] = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'laptop', label: 'Laptop' },
    { value: 'tablet', label: 'Tablet' },
    { value: 'accessories', label: 'Accessories' },
  ];

  const brands: Option[] = [
    { value: 'samsung', label: 'Samsung' },
    { value: 'apple', label: 'Apple' },
    { value: 'xiaomi', label: 'Xiaomi' },
    { value: 'oneplus', label: 'OnePlus' },
  ];

  const models: Option[] = [
    { value: 'model-1', label: 'Model 1' },
    { value: 'model-2', label: 'Model 2' },
    { value: 'model-3', label: 'Model 3' },
    { value: 'model-4', label: 'Model 4' },
  ];

  useEffect(() => {
    const fetchProducts = (): Product[] => [
      { id: '1', imageUrl: 'https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png', name: 'Mobile Phone', price: '$199.99' },
      { id: '2', imageUrl: 'https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png', name: 'Laptop', price: '$899.99' },
      { id: '3', imageUrl: 'https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png', name: 'Tablet', price: '$299.99' },
      { id: '4', imageUrl: 'https://media.croma.com/image/upload/v1708672728/Croma%20Assets/Communication/Mobiles/Images/261934_0_kukyat.png', name: 'Headphones', price: '$49.99' },
    ];

    setProducts(fetchProducts());
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center text-center"
        style={{ backgroundColor: '#F5F5DC' }}
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#E07B39' }}>
          Products
        </h1>
        <p className="text-lg text-gray-600 mb-6">What do you want to buy?</p>

        <div className="mb-6 w-full max-w-4xl space-y-4">
          {/* Product Type Dropdown */}
          <select className="w-1/2 sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto mb-4">
            {productTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          {/* Container for brand, model dropdowns and button */}
          <div className="flex items-center justify-center space-x-4">
            <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {brands.map((brand) => (
                <option key={brand.value} value={brand.value}>
                  {brand.label}
                </option>
              ))}
            </select>

            <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {models.map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>

            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="w-full bg-[#F5F5DC] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#E07B39' }}>
            Available Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
