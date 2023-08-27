/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
  images: {
    domains: ["sina9612-bucket.s3.eu-central-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
