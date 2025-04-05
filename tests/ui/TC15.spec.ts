import { TestData } from '@/fixtures/test-data';
import { test} from '../../fixtures/customFixtures';

test('Test Case 15: Place Order: Register before Checkout', async ({homePage,loginPage,registerPage,cartPage,checkoutPage,productListingPage,paymentPage}) => {

  const newUser = TestData.generateRandomUser(); 
  const subjectMessage = TestData.getContactMessage();
  const creditCardInformation = TestData.getCreditCard()

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage();

  //Block Ads
  await homePage.blockCommonAds();

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
  await productListingPage.clickAddToChart(1)
  await productListingPage.clickContinueShopping()
  
  //Click 'Cart' button
  await homePage.clickCart();

  //Verify that cart page is displayed
  await cartPage.verifyNavigateExpectedPage("https://automationexercise.com/view_cart")

  //Click Proceed To Checkout
  await cartPage.clickCheckoutButton()

  //Verify Address Details and Review Your Order
  await checkoutPage.verifyDeliveryInfortmation(newUser)

  //Enter description in comment text area and click 'Place Order'
  await checkoutPage.fillDescription(subjectMessage)
  await checkoutPage.clickPlaceOrder()

  //Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await paymentPage.fillCreditCardInformation(creditCardInformation)

  //Click 'Pay and Confirm Order' button
  await paymentPage.clickPayAndConfirmOrderButton()

  //Verify success message 'Your order has been placed successfully!'
  await paymentPage.verifyPaymentSuccesfullyMessage()

  //Click 'Delete Account' button
  await registerPage.clickWithText(" Delete Account");

  //Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await registerPage.verifyTextVisible("Account Deleted!");
  
});