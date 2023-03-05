/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            hostname: 'images.unsplash.com',
         },
         {
            hostname: 'wembleypark.com',
         },
         {
            hostname: 'hydeparkwinterwonderland.com',
         },
      ],
   },
};

module.exports = nextConfig;
