'use client';

import { HoverEffect } from "../components/ui/card-hover-effect";

const FeatureSection = () => {
    const projects = [
        {
            title: "Google",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            link: "https://google.com",
        },
        {
            title: "Meta",
            description:
                "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
        },
        {
            title: "Amazon",
            description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
        },
        {
            title: "Microsoft",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
        },
    ];
    return (
        <div className="bg-[#F5F5DC] p-14">
            <div className='flex justify-center items-center'>
                <h2 className='text-center text-4xl font-gilroy-bold text-black'>Perks? HUH ✨</h2>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>

    );
}


export default FeatureSection;