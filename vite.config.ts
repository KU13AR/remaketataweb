import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { localiseHtml } from "./src/i18n/staticHtml";
import { pagePaths } from "./src/i18n/seo";
import type { Plugin } from "vite";

function multilingualHtml(): Plugin {
  return {
    name: "multilingual-html",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, context) { return localiseHtml(html, context.path); },
    },
    generateBundle(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset") return;
      for (const route of pagePaths.filter(route => route !== "/")) {
        this.emitFile({ type: "asset", fileName: route.replace(/^\//, "").replace(/\/$/, "") + "/index.html", source: localiseHtml(String(index.source), route) });
      }
      // Static hosts can serve this entry when an unknown client route is requested.
      this.emitFile({ type: "asset", fileName: "404.html", source: index.source });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), multilingualHtml()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
