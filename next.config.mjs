// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// next.config.mjs
export default {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  