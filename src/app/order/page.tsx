"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import metalRing from "../../../public/images/products/metalRing.png";

import { useEffect, useState } from "react";

// Quotes array
const quotes = [
  "The telephone is a good way to talk to people without having to offer them a drink. — Fran Lebowitz",
  "Technology is best when it brings people together. — Matt Mullenweg",
  "It has become appallingly obvious that our technology has exceeded our humanity. — Albert Einstein",
  "The real problem is not whether machines think but whether men do. — B.F. Skinner",
  "The great myth of our times is that technology is communication. — Libby Larsen",
  "I do not fear computers. I fear the lack of them. — Isaac Asimov",
  "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. — Thomas Edison",
  "The mobile phone acts as a cursor to connect the digital and physical. — Marissa Meyer",
  "Technology is nothing. What's important is that you have faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them. — Steve Jobs",
  "The purpose of technology is not to confuse the brain but to serve the body. — William S. Burroughs",
];

const colors = [
  "bg-purple-200",
  "bg-[#F5F5DC]",
  "bg-[#DCE4C9]",
];

const ProductPage = () => {
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    const randomOrderId = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();
    setOrderId(randomOrderId);
  }, []);

  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const updateQuoteAndColor = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    updateQuoteAndColor();

    const interval = setInterval(() => {
      updateQuoteAndColor();
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center relative">
      </div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            We're prepping your box!
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Frippy’s got you covered - Your order is successfully placed and our
            executive will contact you.
          </p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black">
                  Order Id:{" "}
                  <span className="text-[#E07B39] font-medium">#{orderId}</span>
                </p>
                <p className="font-semibold text-base leading-7 text-black mt-4">
                  Order Placed On :{" "}
                  <span className="text-gray-400 font-medium">
                    {new Date().toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </div>
              <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-[#E07B39] max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#E07B39] hover:shadow-[#E07B39]">
                Need Help?
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <Image
                    src={metalRing}
                    width={140} // Update the width to a larger value
                    height={140} // Update the height as well
                    alt="Premium Watch image"
                    className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                          Iphone Metal Ring Premium Magsafe Back Cover
                        </h2>
                        <div className="flex items-center ">
                          <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                            Colour: <span className="text-gray-500">Black</span>
                          </p>
                          <p className="font-medium text-base leading-7 text-black ">
                            Qty: <span className="text-gray-500">1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">
                            Price
                          </p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-[#E07B39]">
                            INR 349.00
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">
                            Status
                          </p>
                          <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                            {new Date().toLocaleString("en-IN", {
                              timeZone: "Asia/Kolkata",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
              <p className="font-semibold text-lg  py-6">
                Total Price: <span className="text-[#E07B39]"> INR 349.00</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                <button className="flex outline-0 py-6 sm:pr-6  whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-[#E07B39]">
                  <svg
                    className="stroke-black transition-all duration-500 group-hover:stroke-[#E07B39]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
          <div
            className={`${color} text-gray-600 rounded-xl p-12 shadow-lg max-w-3xl mx-auto text-center transition-all duration-1000`}
          >
            <p className="font-semibold text-lg leading-8">{quote}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
