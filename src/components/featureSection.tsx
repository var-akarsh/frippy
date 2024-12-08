"use client";

import { InfiniteMovingCards } from "./aceternity/InfiniteMovingCards";

const FeatureSection = () => {
  return (
    <div className="bg-[#F5F5DC] py-14">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-4xl font-gilroy-bold text-black pb-5">
          Happy Customers✨
        </h2>
      </div>
      <div className="flex justify-center items-center max-w-8xl mx-auto overflow-x-hidden w-full h-full py-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>{" "}
    </div>
  );
};

export default FeatureSection;

const testimonials = [
  {
    quote:
      "I ordered a mobile case, and the delivery agent was so polite and professional. As a bonus, I got a free cable protector with my order! I am really impressed with the service and product quality. Highly recommended!",
    name: "Khushi Srivastava",
    title: "Great Service & Extra Perks",
  },
  {
    quote:
      "I ordered a mobile case and was pleasantly surprised to get a discount on a screen guard. The product quality is amazing, and I got a premium item at the same price you'd pay in the market. Plus, the delivery and installation at home made the whole experience super convenient!",
    name: "Tanmay Mishra",
    title: "Discounts & Premium Quality",
  },
  {
    quote:
      "I got a free mobile spa with my order, which was an unexpected but welcome surprise! The case I ordered is both affordable and of excellent quality. The delivery was quick, and everything arrived as expected. Best experience so far!",
    name: "Aditi Sahu",
    title: "Affordable & Excellent Service",
  },
  {
    quote:
      "I ordered a mobile case and received it on time. The case is of great quality, and the best part was the free installation at home. It's so convenient to get everything done from home – I didn’t even have to go to the market! Excellent service!",
    name: "Ayush Saxena",
    title: "Affordable & Convenient",
  },
  {
    quote:
      "I ordered a mobile case, and I couldn't be happier! The same day delivery was a huge bonus. The MagSafe on my case works perfectly. The quality of the products is top-notch. Highly recommend!",
    name: "Vaibhav Raj",
    title: "Fast Delivery & Perfect Fit",
  },
  {
    quote:
      "I bought my mobile online and needed a good quality case for it. I went with the Frippy cover, and it was delivered without any hassle. The fit is perfect, and the protection is just what I needed. Getting the phone and accessories on the same day was a great bonus! Great service and fast delivery – will definitely shop again!",
    name: "Arpan Dixit.",
    title: "No Hassle, Just Great Service",
  },
];
