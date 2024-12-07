import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What products does Frippy offer?",
      answer:
        "Frippy specializes in delivering high-quality mobile accessories, including screen protectors and back cases, directly to your doorstep. Our collection is designed to provide protection and style for a wide range of smartphone models.",
    },
    {
      question: "Does Frippy offer same-day delivery?",
      answer:
        "Yes, we pride ourselves on delivering all our products on the same day you place your order! Simply order before our daily cut-off time, and we will ensure your mobile accessories reach your doorstep within hours.",
    },
    {
      question: "How is Frippy different from others?",
      answer:
        "With Frippy, you don not need to commit to a purchase before trying the product. We offer a unique *try-before-you-pay* option—select a variety of products, try them out yourself, and pay only for the ones you choose at the time of delivery.",
    },
    {
      question: "Which areas does Frippy deliver to?",
      answer:
        "Currently, Frippy delivers to most locations across India. If you are unsure whether we deliver to your area, you can check by entering your pin code on our website at checkout.",
    },
    {
      question: "What is the warranty on Frippy products?",
      answer:
        "All products purchased from Frippy come with a standard 6-month warranty, covering any manufacturing defects. For specific warranty details on individual products, please refer to the product page or contact our customer support.",
    },
    {
      question: "Does Frippy offer a care plan for mobile accessories?",
      answer:
        "Yes, Frippy offers an optional care plan for certain mobile accessories, such as screen protectors and back cases. This plan includes free replacements for accidental damages within the first 6 months. You can opt for this plan during checkout.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto p-4 max-w-1xl">
        <div className="flex justify-center items-center">
          <h2 className="text-center text-4xl font-gilroy-bold text-black p-5">
            Frequently Asked Questions (FAQ){" "}
          </h2>
        </div>
        <div className="accordion">
          {faqItems.map((item, index) => (
            <div key={index} className="accordion-item border-b">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-4 flex justify-between items-center focus:outline-none transition-colors duration-200 ${
                  activeIndex === index ? "text-[#E07B39]" : "text-gray-400"
                } hover:text-[#E07B39]`}
                aria-expanded={activeIndex === index}
              >
                <span className="accordion-title text-lg">{item.question}</span>
                <span
                  className={`icon transition-transform duration-200 ${
                    activeIndex === index
                      ? "rotate-180 text-[#E07B39]"
                      : "rotate-0 text-gray-400"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
