import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  adapter: vercelStatic({
    analytics: true,
  }),
});
