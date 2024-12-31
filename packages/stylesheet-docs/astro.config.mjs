import path from "node:path";
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": { destination: "/getting-started/introduction", status: 307 },
  },
  vite: {
    ssr: {
      noExternal: ["@jrgermain/stylesheet"],
    },
    resolve: {
      dedupe: [
        "@fontsource-variable/manrope",
        "@fontsource-variable/lexend",
        "@fontsource-variable/source-code-pro",
      ],
    },
  },
});
