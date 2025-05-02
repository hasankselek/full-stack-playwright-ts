import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    baseURL: 'http://automationexercise.com',
    trace: 'on',
    launchOptions: {
      
      args: ["--start-maximized"]},
    viewport: null,
  },
 
  projects: [
    {
      name: 'chromium',
      use: { 
        //...devices['Desktop Chrome'],
      viewport: null,
      headless: true,
    }
  },

    {
      name: 'firefox',
      use: { 
        //...devices['Desktop Firefox'] },
        viewport: null,}
    },

    {
      name: 'webkit',
      use: { //...devices['Desktop Safari'] 
        viewport: null,},
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});
