import { defineConfig } from "vite";

export default defineConfig({
    base: "/your-repo-name/", // Adjust to your GitHub repository name
    build: {
        outDir: "docs", // Output the build to `docs` folder for GitHub Pages
    },
});
