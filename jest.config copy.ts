// jest.config.ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

const jestConfigWithOverrides = async () => {
  const configFn = createJestConfig(config);
  const res = await configFn();

  res.moduleNameMapper = {
    ...res.moduleNameMapper,
  };

  return res;
};

export default jestConfigWithOverrides;
