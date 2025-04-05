import { test} from '../../fixtures/customFixtures';

test('Test Case 17: Remove Products From Cart', async ({homePage,cartPage,productListingPage}) => {


  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage();

  //Block Ads
  await homePage.blockCommonAds();

  //Add products to cart
  await homePage.clickProductsButton();
  await productListingPage.clickAddToChart(1)
  await productListingPage.clickContinueShopping()

  //Click 'Cart' button
  await homePage.clickCart();

  //Verify that cart page is displayed
  await cartPage.verifyNavigateExpectedPage("https://automationexercise.com/view_cart")

  //Click 'X' button corresponding to particular product
  await cartPage.clickQuantityDeleteIcon()

  //Verify that product is removed from the cart
  await cartPage.verifyEmptyCart()
  
});