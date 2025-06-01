import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/dom/dom.ts", "src/node/node.ts"],
  outDir: "dist/dist_tsdown",
  format: "esm",
  dts: true,
});
