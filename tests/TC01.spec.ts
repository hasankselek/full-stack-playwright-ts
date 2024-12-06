import { test } from '../fixtures/customFixtures';

test('Test Case 1: Register User', async ({ page,homePage,loginPage,registerPage,commonSteps }) => {

  //1-2 Navigate to url 'http://automationexercise.com' and verify that home page is visible successfully
  await homePage.navigateHomePage();
  await homePage.verifyHomePageIcon();

  //3-4 Click on 'Signup / Login' button and Verify 'New User Signup!' is visible
  await homePage.clickLoginButton(); 
  await loginPage.verifyLoginPageDisplayed();

  //5-6 Enter name and email address
  await loginPage.firstRegister();
  await loginPage.clickSignUp();

  //7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await registerPage.verifyEnterAccountInformationTextDisplayed();

  //8. Fill details: Title, Name, Email, Password, Date of birth
  //9. Select checkbox 'Sign up for our newsletter!'
  //10. Select checkbox 'Receive special offers from our partners!'
  //11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await registerPage.fillUserInformation('2','9','1996',"India"); 

  //12. Click 'Create Account button'
  await commonSteps.clickWithText('Create Account');

  //13-14 Verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
  await registerPage.verifyAccountCreated();
  await registerPage.clickContinue();

  //15-16 Verify that 'Logged in as username' is visible and Click 'Delete Account' button
  await commonSteps.verifyTextVisible(" Logged in as ");
  await commonSteps.clickWithText(" Delete Account");
  
  //17. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await commonSteps.verifyTextVisible("Account Deleted!");
  await commonSteps.clickWithText('Continue');

  await page.close();

});