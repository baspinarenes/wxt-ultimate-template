import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/auto-icons", "@wxt-dev/module-react"],
  autoIcons: {
    developmentIndicator: "overlay",
  },
  browser: "chrome",
  debug: true,
  imports: {
    imports: [],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  webExt: {
    chromiumArgs: ["--user-data-dir=./.wxt/chrome-data"],
  },
  manifest: {
    permissions: [
      "storage",
      "tabs",
      "scripting",
      "cookies",
      "background",
      "activeTab",
      "sidePanel",
    ],
  },
});
