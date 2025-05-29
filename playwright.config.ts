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
    viewport: null,
  },

  projects: [
    {
      name: 'chromium',
      testMatch: ['ui/**/*.spec.ts'],      // tests/ui altı
      use: { ...devices['Desktop Chrome'], viewport: null },
    },
    {
      name: 'firefox',
      testMatch: ['ui/**/*.spec.ts'],      // tests/ui altı
      use: { ...devices['Desktop Firefox'], viewport: null },
    },
    {
      name: 'api-tests',
      testMatch: ['api/**/*.spec.ts'],     // tests/api altı
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