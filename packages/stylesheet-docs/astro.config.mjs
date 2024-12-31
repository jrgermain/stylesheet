import { defineConfig } from "astro/config";
import css from "rollup-plugin-import-css";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": { destination: "/getting-started/introduction", status: 307 },
  },
  vite: {
    build: {
      rollupOptions: {
        plugins: [css()],
      },
    },
  },
});
