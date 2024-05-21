import { createRequire } from "module";

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: { typedRoutes: false, mdxRs: true },
  images: {
    domains: ["static-ourstore.hyperfunctor.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/products",
        destination: "/products/1",
        permanent: false,
      },
      {
        source: "/categories/t-shirts",
        destination: "/categories/t-shirts/1",
        permanent: false,
      },
      {
        source: "/categories/hoodies",
        destination: "/categories/hoodies/1",
        permanent: false,
      },
      {
        source: "/categories/accessories",
        destination: "/categories/accessories/1",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://www.nextjsmasters.bartekdomena.pl",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

const withMDX = require("@next/mdx")();
export default withMDX(nextConfig);
