import { defineConfig } from "vite";

export default defineConfig({
    base: "/ifs-web-component-1/", // Adjust to your GitHub repository name
    build: {
        outDir: "docs", // Output the build to `docs` folder for GitHub Pages
    },
});
