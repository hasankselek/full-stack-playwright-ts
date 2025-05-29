// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  workers: 1,
  reporter: [['list']],

  use: {
    headless: true,
    baseURL: 'http://automationexercise.com',
    trace: 'on',
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      testMatch: ['ui/**/*.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      testMatch: ['ui/**/*.spec.ts'],
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'api-tests',
      testMatch: ['api/**/*.spec.ts'],
      use: {
        baseURL: 'http://automationexercise.com',
        headless: true,
        trace: 'off',
        screenshot: 'off',
        video: 'off',
      },
    },
  ],
});