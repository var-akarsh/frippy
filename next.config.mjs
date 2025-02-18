/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "media.istockphoto.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "dpt4om8vd.cloudinary.com" // Add this line
    ],
  },
};

export default nextConfig;
