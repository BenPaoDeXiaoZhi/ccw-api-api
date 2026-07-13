import { defineConfig } from "tsup";
export default defineConfig({
  entry: [
    "src/index.ts",
    "src/setToken.ts",

    "src/bfs-web/index.ts",
    "src/community-web/index.ts",
    "src/community-web-cloud-database/index.ts",
    "src/gandi-main/index.ts",
    "src/op-parent-api/index.ts",
    "src/sso/index.ts",
  ],
  splitting: false,
  dts: {
    resolve: true,
  },
  format: ["cjs", "esm", "iife"],
  outDir: "dist",
  target: ["chrome148"],
  external: ["util", "fs", "path", "os"],
  platform: "browser",
  globalName: "ccwApi",
  minify: true,
  clean: true,
  treeshake: true,
});
