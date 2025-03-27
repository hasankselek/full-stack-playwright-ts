import { test as baseTest, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { APIHelper } from '../utils/apiHelper';
import { TestConfig } from '../config/testConfig';


type CustomFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  apiHelper: APIHelper;
  testConfig: TestConfig;
  authenticatedPage: Page;
};

const test = baseTest.extend<CustomFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  apiHelper: async ({}, use) => {
    const config = TestConfig.getInstance();
    const apiHelper = new APIHelper(config.getApiBaseUrl());
    await apiHelper.init();
    await use(apiHelper);
    await apiHelper.dispose();
  },

  // TestConfig fixture
  testConfig: async ({}, use) => {
    const config = TestConfig.getInstance();
    await use(config);
  },
});

export { test, expect };