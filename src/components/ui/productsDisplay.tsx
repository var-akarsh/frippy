import Image from "next/image";
import { useRouter } from "next/navigation";
import FooterSection from "../footerSection";

export default function ProductsDisplay(prop: any) {
  const products = prop.cards;
  const router = useRouter();

  const handleClick2 = (productId: number) => {
    router.push(`/product/${productId}`); 
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product: any) => (
              <div
                key={product.productId} 
                className="group relative cursor-pointer"
                onClick={() => handleClick2(product.productId)} 
              >
                <Image
                  alt={product.productName}
                  src={product.baseUrl}
                  width={300}
                  height={300}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.productName}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Original Price: ₹{product.price + product.price}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="footer" className="mt-12">
        <FooterSection />
      </div>
    </>
  );
}
