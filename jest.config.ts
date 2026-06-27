import type { Config } from "jest";
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
  testMatch: ["**/src/**/*.test.ts"],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
  },
};
export default config;
