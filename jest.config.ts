import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  coverageDirectory: 'coverage',
  rootDir: '.',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
export default config
