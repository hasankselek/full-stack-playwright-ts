import { test} from '../../fixtures/customFixtures';

test('Test Case 25: Verify Scroll Up using "Arrow" button and Scroll Down functionality', async ({homePage}) => {

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Block Ads
  await homePage.blockCommonAds()

  //Scroll down page to bottom
  await homePage.scroolDownFooter();

  //Verify 'SUBSCRIPTION' is visible
  await homePage.verifyTextVisible("Subscription")

  //Click on arrow at bottom right side to move upward
  await homePage.clickScrollUpButton();

  //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
  await homePage.verifyHomePageTextVisible("Full-Fledged practice website for Automation Engineers");
  
  
});