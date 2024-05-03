/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
