'use client'
import { LoadingScreen } from "@/components/ui/loading";
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
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.frippy.in/product/${productId}` 
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
    return <LoadingScreen />;  
  }

  if (!product) {
    return <div>Product not found.</div>;  
  }

  return <ProductDescription product={product} />;
}
