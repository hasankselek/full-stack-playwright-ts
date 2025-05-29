import { test} from '../../fixtures/customFixtures';

test('Test Case 26: Verify Scroll Up without "Arrow" button and Scroll Down functionality', async ({homePage,productListingPage,productDetailingPage}) => {

  //Navigate to url 'http://automationexercise.com' 
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage()

  //Scroll down page to bottom
  await homePage.scroolDownFooter();

  //Verify 'SUBSCRIPTION' is visible
  await homePage.verifyTextVisible("Subscription")

  //Scroll up page to top
  await homePage.scrollToHeader();

  //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
  await homePage.verifyHomePageTextVisible("Full-Fledged practice website for Automation Engineers");
  
});