/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        
      },

      // {
      //   protocol:"https",
      //   hostname:"i.ibb.co"
      // }
    ],
  },
   env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
