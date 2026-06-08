import type { Config } from "jest";
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts", // 排除类型声明文件
  ],
  testMatch: ["**/src/**/*.test.ts"],
  transformIgnorePatterns: [],
};
export default config;
