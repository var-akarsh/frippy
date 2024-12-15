import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import aditi from "../../public/images/testimonials/aditi.jpeg"
import ayush from "../../public/images/testimonials/ayush.jpg"
import prasoon from "../../public/images/testimonials/prasoon.jpg"
import vaibhav from "../../public/images/testimonials/vaibhav.jpg"
import arpan from "../../public/images/testimonials/arpan.jpeg"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I ordered a mobile case, and the delivery agent was so polite and professional. As a bonus, I got a free cable protector with my order! I am really impressed with the service and product quality. Highly recommended!",
      name: "Prasoon Sharma",
      designation: "Great Service & Extra Perks",
      src: prasoon,
    },
    // {
    //   quote:
    //     "I ordered a mobile case and was pleasantly surprised to get a discount on a screen guard. The product quality is amazing, and I got a premium item at the same price you'd pay in the market. Plus, the delivery and installation at home made the whole experience super convenient!",
    //   name: "Tanmay Mishra",
    //   designation: "Discounts & Premium Quality",
    //   src: "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
    // },
    {
      quote:
        "I ordered a mobile case and received it on time. The case is of great quality, and the best part was the free installation at home. It's so convenient to get everything done from home – I didn’t even have to go to the market! Excellent service!",
      name: "Ayush Saxena",
      designation: "Affordable & Convenient",
      src: ayush,
    },
    {
      quote:
        "I got a free mobile spa with my order, which was an unexpected but welcome surprise! The case I ordered is both affordable and of excellent quality. The delivery was quick, and everything arrived as expected. Best experience so far!",
      name: "Aditi Sahu",
      designation: "Affordable & Excellent Service",
      src: aditi,
    },
    {
      quote:
        "I ordered a mobile case, and I couldn't be happier! The same day delivery was a huge bonus. The MagSafe on my case works perfectly. The quality of the products is top-notch. Highly recommend!",
      name: "Vaibhav Raj",
      designation: "Fast Delivery & Perfect Fit",
      src: vaibhav,
    },
    {
      quote:
        "I bought a tempered glass protector for my mobile from Frippy, and the quality is very good. The order was delivered within 2 hours, and the delivery and installation agent was very professional and polite. It was a smooth and hassle-free experience ordering with Frippy!",
      name: "Arpan Dixit",
      designation: "No Hassle, Just Great Service",
      src: arpan,
    },
  ];
  return (
    <div
      className="max-w-7xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-8 py-20"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-center text-5xl font-gilroy-bold text-black">
          Happy Customers✨
        </h2>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
}