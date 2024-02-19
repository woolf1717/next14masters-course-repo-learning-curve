import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: { typedRoutes: true, mdxRs: true },
};

const withMDX = require("@next/mdx")();
export default withMDX(nextConfig);
