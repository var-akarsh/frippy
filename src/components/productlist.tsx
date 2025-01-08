import React from 'react';

// Define type for product
type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8" >
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
        >
          {/* Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            {/* Product Name */}
            <h3 className="text-xl font-semibold">{product.name}</h3>
            {/* Product Price */}
            <p className="text-lg text-gray-700 mt-2">{product.price}</p>
            {/* View Button */}
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
