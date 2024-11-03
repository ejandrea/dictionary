// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

const jestConfigWithOverrides = async () => {
  const configFn = createJestConfig(config);
  const res = await configFn();

  res.moduleNameMapper = {
    // We cannot depend on the exact key used by Next.js
    // so we inject an SVG key higher up on the mapping tree
    '\\.svg': '<rootDir>/src/__mocks__/svg.js',
    ...res.moduleNameMapper,
  };

  return res;
};

export default jestConfigWithOverrides;