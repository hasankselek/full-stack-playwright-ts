import { test as baseTest, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { APIHelper } from '../utils/apiHelper';
import { TestConfig } from '../config/testConfig';
import { ContactUsPage } from '@/pages/ContactUsPage';
import { TestCasePage } from '@/pages/TestCasePage';
import { ProductListingPage } from '@/pages/ProductListingPage';
import { ProductDetailingPage } from '@/pages/ProductDetailingPage';
import { CartPage } from '@/pages/CartPage';


type CustomFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  contactUsPage: ContactUsPage;
  testCasePage: TestCasePage;
  productListingPage: ProductListingPage;
  productDetailingPage: ProductDetailingPage;
  cartPage: CartPage;
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
  contactUsPage: async ({page},use) =>{
    await use(new ContactUsPage(page));
  },
  testCasePage: async ({page},use) =>{
    await use(new TestCasePage(page));
  },
  productListingPage: async ({page},use) =>{
    await use(new ProductListingPage(page));
  },
  productDetailingPage: async ({page},use) =>{
    await use(new ProductDetailingPage(page));
  },
  cartPage: async ({page},use) =>{
    await use(new CartPage(page));
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