import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom", // Use jsdom for browser-like environment
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file for testing utilities
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/_old"], // Ignore these folders
};

export default config;
