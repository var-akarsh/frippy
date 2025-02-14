'use client'
import ProductDescription from "@/components/ui/productDescription";
import { useEffect, useState } from "react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchProductDetails(params.id);
    }
  }, [params.id]);

  const fetchProductDetails = async (productId: string) => {
    try {
      const response = await fetch(
        `http://ec2-65-0-71-181.ap-south-1.compute.amazonaws.com:8080/product/${productId}` // Replace with your API endpoint
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (!product) {
    return <div>Product not found.</div>; // Handle the case where the product is not found
  }

  return <ProductDescription product={product} />;
}
