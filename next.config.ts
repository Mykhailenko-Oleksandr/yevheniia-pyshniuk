import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

// const nextConfig: NextConfig = {
//   // images: {
//   //   remotePatterns: [{ protocol: "https", hostname: "ac.goit.global" }],
//   // },
//   i18n: {
//     locales: ["uk", "en"],
//     defaultLocale: "uk",
//   },
// };

// export default nextConfig;

const nextConfig: NextConfig = { reactStrictMode: true, i18n };
export default nextConfig;
