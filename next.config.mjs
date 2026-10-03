/** @type {import('next').NextConfig} */
// GITHUB_PAGES=1 builds the static site for https://abdul0018.github.io/Yaproq-Donar-Landing/.
const pages = process.env.GITHUB_PAGES === "1";
const base = pages ? "/Yaproq-Donar-Landing" : "";

const nextConfig = {
  reactStrictMode: true,
  ...(pages && { output: "export", basePath: base, trailingSlash: true, images: { unoptimized: true } }),
  env: { NEXT_PUBLIC_BASE_PATH: base },
};
export default nextConfig;
