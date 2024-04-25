import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    "/": { destination: "/getting-started/introduction", status: 307 },
  },
});
