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
        "Yes, we pride ourselves on free delivering all our products on the same day you place your order! Simply order before our daily cut-off time, and we will ensure your mobile accessories reach your doorstep within hours.",
    },
    {
      "question": "How is Frippy different from others?",
      "answer": "With Frippy, you do not need to commit to a purchase before trying the product. We offer a unique *try-before-you-pay* option—select a variety of products, try them out yourself, and pay only for the ones you choose at the time of delivery."
    },    
    {
      "question": "What does try-before-you-pay mean?",
      "answer": "You can order multiple products, try them upon delivery, and pay only for the one you decide to keep."
    },
    {
      "question": "What is the mission of Frippy?",
      "answer": "Our mission is to empower 1 lakh students in their education journey and support underprivileged children by providing them with food and educational opportunities and you will be the part of our mission with every purchase made from us!"
    },
    {
      question: "Which areas does Frippy deliver to?",
      answer:
        "Currently, Frippy delivers to most locations across Bengaluru. If you are unsure whether we deliver to your area, you can check by entering your pin code at checkout.",
    }
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
