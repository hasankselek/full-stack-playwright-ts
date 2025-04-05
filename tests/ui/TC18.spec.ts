import { wait } from '@/utils/testUtils';
import { test} from '../../fixtures/customFixtures';

test('Test Case 18: View Category Products', async ({homePage,categoryProductsPage}) => {


  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage();

  //Block Ads
  await homePage.blockCommonAds();

  //Verify that categories are visible on left side bar
  await homePage.verifyCategoryTitlesVisible();

  //Click on 'Women' category
  await homePage.clickWomenCategory();

  //Click on any category link under 'Women' category, for example: Dress
  await homePage.clickSelectedWomenSubCategory();

  //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  await categoryProductsPage.verifyCategoryTitleVisible("Women - Dress Products")

  //On left side bar, click on any sub-category link of 'Men' category
  await homePage.clickManCategory();

  await wait(1000)

  //Verify that user is navigated to that category page
  await categoryProductsPage.verifyCategoryTitleVisible("Men - Tshirts Products")
  
});