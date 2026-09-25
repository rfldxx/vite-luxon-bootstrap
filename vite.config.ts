import { defineConfig } from "vite";

export default defineConfig({
  // Относительные пути работают и в корне Pages, и в /<repo>/.
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
