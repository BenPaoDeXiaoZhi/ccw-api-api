import { defineConfig } from "tsdown";
export default defineConfig({
  entry: {
    index: "src/index.ts",
    bfs: "src/bfs-web/index.ts",
    communityWeb: "src/community-web/index.ts",
    communityWebDB: "src/community-web-cloud-database/index.ts",
    gandiMain: "src/gandi-main/index.ts",
    opParent: "src/op-parent-api/index.ts",
    sso: "src/sso/index.ts",
  },
  format: ["cjs", "esm"],
  outDir: "dist",
  platform: "browser",
  globalName: "ccwApi",
  minify: true,
  clean: true,
  treeshake: true,
});
