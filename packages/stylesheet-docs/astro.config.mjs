import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": { destination: "/getting-started/introduction", status: 307 },
  },
  integrations: [alpinejs()],
});
