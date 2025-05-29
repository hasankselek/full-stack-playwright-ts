import { test} from '../../fixtures/customFixtures';

test('Test Case 22: Add to cart from Recommended items', async ({homePage,cartPage}) => {

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Block Ads
  await homePage.blockCommonAds()

  //Scroll down page to bottom
  await homePage.scroolDownFooter();

  //erify 'RECOMMENDED ITEMS' are visible
  await homePage.verifyRecommendedItemsTextVisible()

  //Click on 'Add To Cart' on Recommended product
  await homePage.clickAddToCartButton();

  //Click on 'View Cart' button
  await homePage.clickWithText("View Cart")

  //Verify that product is displayed in cart page
  await cartPage.verifyAddedProductsVisibility();
  
});