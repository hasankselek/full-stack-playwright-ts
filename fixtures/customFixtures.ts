import { test as baseTest, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ContactUsPage } from '@/pages/ContactUsPage';
import { ProductListingPage } from '@/pages/ProductListingPage';
import { ProductDetailingPage } from '@/pages/ProductDetailingPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { PaymentPage } from '@/pages/PaymentPage';
import { CategoryProductsPage } from '@/pages/CategoryProductsPage';
import { BrandsProductsPage } from '@/pages/BrandsProductPage';
import { TestCasePage } from '@/pages/TestCasePage';

// Tip tanımı
type CustomFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  contactUsPage: ContactUsPage;
  testCasePage: TestCasePage;
  productListingPage: ProductListingPage;
  productDetailingPage: ProductDetailingPage;
  cartPage: CartPage;
  paymentPage: PaymentPage;
  checkoutPage: CheckoutPage;
  categoryProductsPage: CategoryProductsPage;
  brandsProductsPage: BrandsProductsPage;
};

function createFixture<T>(PageObject: new (page: Page) => T) {
  return async (
    { page }: { page: Page }, // Burada `page`'in tipini açıkça belirtiyoruz
    use: (po: T) => Promise<void>
  ) => {
    await use(new PageObject(page));
  };
}

// Extend ile sadeleştirilmiş fixture'lar
const test = baseTest.extend<CustomFixtures>({
  homePage: createFixture(HomePage),
  loginPage: createFixture(LoginPage),
  registerPage: createFixture(RegisterPage),
  contactUsPage: createFixture(ContactUsPage),
  productListingPage: createFixture(ProductListingPage),
  productDetailingPage: createFixture(ProductDetailingPage),
  cartPage: createFixture(CartPage),
  checkoutPage: createFixture(CheckoutPage),
  paymentPage: createFixture(PaymentPage),
  categoryProductsPage: createFixture(CategoryProductsPage),
  brandsProductsPage: createFixture(BrandsProductsPage),
  testCasePage: createFixture(TestCasePage),
});

export { test, expect };