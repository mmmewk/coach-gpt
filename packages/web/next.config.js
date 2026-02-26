const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: require("path").join(__dirname, "../../"),
};

module.exports = withPWA(nextConfig);
