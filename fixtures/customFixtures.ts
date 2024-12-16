import { test as baseTest, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CommonSteps } from '../pages/CommonSteps';


type CustomFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  commonSteps: CommonSteps;
};

const test = baseTest.extend<CustomFixtures>({

  commonSteps: async ({ page }, use) => {
    const commonSteps = new CommonSteps(page);
    await use(commonSteps);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});

export { test, expect };