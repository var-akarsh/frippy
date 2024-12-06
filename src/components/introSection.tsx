import Image from "next/image";
import React from "react";
import IntroImage from "../../public/images/introImage.jpg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import myImage from "../../public/images/check.png";
import flexibleTiming from "../../public/images/happy-hour.png";
import Interaction from "../../public/images/interactive.png";

const IntroSection = () => {
  return (
    <div>
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row p-8">
        {/* <Image
          src={IntroImage}
          className="w-full md:w-1/2 h-auto md:h-2/3"
          alt="intro_image"
        /> */}
        <div className="flex flex-col mt-6 md:mt-12 w-full md:w-5/12">
          <p className="text-3xl font-gilroy-bold text-[#F5F5DC]">
            We Provide you the best platform to start
          </p>
          <p className="mt-7 text-slate-500 text-sm font-gilroy-regular">
            We offer you the best platform to make some side income while
            working. You also get the satisfaction of helping new dreamers. This
            is just the beginning. We have a lot more for you, and this is the
            best opportunity for you with special offers for early participants.
            Stay tuned!
          </p>
        </div>
      </div>

      {/* Features Section - Row Layout */}
      <div
        className="flex flex-direction: column;
 flex-wrap justify-center gap-10 py-7 px-6"
      >
        {/* Seamless Onboarding */}
        <div className="w-full sm:w-52 md:w-52 flex flex-col items-center">
          <Image
            src={myImage}
            alt="Seamless Onboarding"
            width={80}
            height={80}
            className="w-16 h-16"
          />
          <p className="font-bold mt-2 font-gilroy-bold text-center">
            Seamless Onboarding
          </p>
          <p className="text-slate-500 text-sm mt-1 text-center font-gilroy-light">
            Effortlessly become a mentor in just a few straightforward steps.
            Our simple process ensures you can get started quickly and easily.
          </p>
        </div>

        {/* Flexible Scheduling */}
        <div className="w-full sm:w-52 md:w-52 flex flex-col items-center">
          <Image
            src={flexibleTiming}
            alt="Flexible Scheduling"
            width={80}
            height={80}
            className="w-16 h-16"
          />
          <p className="font-bold mt-2 font-gilroy-bold text-center">
            Flexible Scheduling
          </p>
          <p className="text-slate-500 text-sm mt-1 text-center font-gilroy-light">
            Choose convenient times to mentor students. Our platform fits your
            availability, making mentoring easy to schedule.
          </p>
        </div>

        {/* Direct Interaction */}
        <div className="w-full sm:w-52 md:w-52 flex flex-col items-center">
          <Image
            src={Interaction}
            alt="Direct Interaction"
            width={80}
            height={80}
            className="w-16 h-16"
          />
          <p className="font-bold mt-2 font-gilroy-bold text-center">
            Direct Interaction
          </p>
          <p className="text-slate-500 text-sm mt-1 text-center font-gilroy-light">
            Engage with your future peers through one-on-one interactions. Build
            meaningful relationships and provide tailored guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
