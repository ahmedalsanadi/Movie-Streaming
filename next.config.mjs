/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['image.tmdb.org'], // Add the allowed domain for your images
    },
};

export default nextConfig;
