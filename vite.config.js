import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isUserPage = repoName === "rishabhgupta44.github.io";

export default defineConfig({
  plugins: [react()],
  base: repoName && !isUserPage ? `/${repoName}/` : "/",
});
