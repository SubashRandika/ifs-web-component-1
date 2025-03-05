import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    base: "/ifs-web-component-1/", // Adjust to your GitHub repository name
    build: {
        outDir: "docs", // Output the build to `docs` folder for GitHub Pages
        lib: {
            entry: "src/peoples-hub-widget.ts",
            formats: ["es"],
            fileName: "index",
        },
        rollupOptions: {
            external: ["lit"],
        },
    },
    plugins: [dts()],
});
