import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["cjs", "esm", "iife"],
  outDir: "dist",
  target: ["chrome148"],
  external: ["util", "fs", "path", "os"],
  platform: "browser",
  globalName: "ccwApi",
  minify: true,
});
