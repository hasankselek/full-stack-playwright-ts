import { wait } from '@/utils/testUtils';
import { test} from '../../fixtures/customFixtures';

test('Test Case 18: View Category Products', async ({homePage,brandsProductsPage}) => {


  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Block Ads
  await homePage.blockCommonAds()

  //Verify that Brands are visible on left side bar
  await homePage.verifyBrandTextVisible()

  // Click on any brand name
  await homePage.clickWithText("H&M")

  //Verify that user is navigated to brand page and brand products are displayed
  await brandsProductsPage.verifyBrandTitleVisible("Brand - H&M Products")
  await brandsProductsPage.verifyProductsVisible()

  //On left side bar, click on any other brand link
  await brandsProductsPage.clickWithText("Polo")

  //Verify that user is navigated to that brand page and can see products
  await brandsProductsPage.verifyBrandTitleVisible("Brand - Polo Products")
  await brandsProductsPage.verifyProductsVisible()
  
});