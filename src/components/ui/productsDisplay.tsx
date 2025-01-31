import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductsDisplay(prop: any) {
    const products = prop.cards;
const router = useRouter()
    const handleClick2 = ()=>{
      console.log("asd")
      router.push('/test')
    }
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
  
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
            {products.map((product: any) => (
              <div  key={product.title} className="group relative cursor-pointer" onClick={handleClick2}>
                <Image
                  alt={product.title}
                  src={product.src}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Original Price: ₹{product.originalPrice}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  