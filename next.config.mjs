import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: { typedRoutes: true, mdxRs: true },
  images: {
    domains: ["static-ourstore.hyperfunctor.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/products/t-shirts",
        destination: "/products/t-shirts/1",
        permanent: false,
      },
    ];
  },
};

const withMDX = require("@next/mdx")();
export default withMDX(nextConfig);
