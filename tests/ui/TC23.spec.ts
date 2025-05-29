import { TestData } from '@/fixtures/test-data';
import { test} from '../../fixtures/customFixtures';

test('Test Case 23: Verify address details in checkout page', async ({checkoutPage,cartPage,homePage,loginPage,registerPage,productListingPage}) => {

  const newUser = TestData.generateRandomUser(); 

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Block Ads
  await homePage.blockCommonAds()

  //Click 'Signup / Login' button
  await homePage.clickLoginButton(); 

  //Fill all details in Signup and create account
  await loginPage.registerWithValidUser(newUser)
  await loginPage.clickSignUp();
  await registerPage.fillUserInformation(newUser); 
  await registerPage.clickWithText('Create Account');

  //Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await registerPage.verifyAccountCreated();
  await registerPage.clickContinue();

  //Verify ' Logged in as username' at top
  await registerPage.verifyTextVisible(" Logged in as ");

  //Add products to cart
  await homePage.clickProductsButton();
  await productListingPage.clickAddToChart(1);
  await productListingPage.clickContinueShopping();

  //Click 'Cart' button
  await homePage.clickCart();

  //Verify that cart page is displayed
  await cartPage.verifyNavigateExpectedPage("https://automationexercise.com/view_cart");

  //Click Proceed To Checkout
  await cartPage.clickCheckoutButton()

  //Verify that the delivery address is same address filled at the time registration of account
  await checkoutPage.verifyDeliveryInfortmation(newUser);

  //Verify that the billing address is same address filled at the time registration of account
  await checkoutPage.verifyBillingAddress(newUser);

  //Click 'Delete Account' button
  await registerPage.clickWithText(" Delete Account");

  //Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await registerPage.verifyTextVisible("Account Deleted!");
  await registerPage.clickWithText('Continue');


  
});