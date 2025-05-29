// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  workers: 1,
  reporter: [
    ['line'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false
    }]
  ],

  use: {
    headless: false,
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
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
        screenshot: 'only-on-failure',
        video: 'off',
      },
    },
    {
      name: 'firefox',
      testMatch: ['ui/**/*.spec.ts'],
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: { args: ['--start-maximized'] },
        screenshot: 'only-on-failure',
        video: 'off',
        
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