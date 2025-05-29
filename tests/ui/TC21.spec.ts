import { test} from '../../fixtures/customFixtures';

test('Test Case 21: Add review on product', async ({homePage,productListingPage,productDetailingPage}) => {

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Click on 'Products' button
  await homePage.clickProductsButton();

  //Verify user is navigated to ALL PRODUCTS page successfully
  await productListingPage.verifyNavigateExpectedPage("https://automationexercise.com/products")

  //Click on 'View Product' button
  await productListingPage.clickFirstProduct();

  //Block Ads
  await homePage.blockCommonAds()

  //Verify 'Write Your Review' is visible
  await productDetailingPage.verifyWriteYourReviewButtonVisible();

  //Enter name, email and review
  await productDetailingPage.enterName("Test User");
  await productDetailingPage.enterEmail("test@test.com");
  await productDetailingPage.enterReview("This is a test review for the product.");

  //Click 'Submit' button
  await productDetailingPage.clickSubmitButton();

  //Verify success message 'Thank you for your review.'
  await productDetailingPage.verifySuccessMessageVisible();
  
});