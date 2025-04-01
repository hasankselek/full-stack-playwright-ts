import { TestData } from '@/fixtures/test-data';
import { test} from '../../fixtures/customFixtures';

test('Register User', async ({page,homePage,loginPage,registerPage}) => {

  const newUser = TestData.generateRandomUser(); 

  //1-2 Navigate to url 'http://automationexercise.com' and verify that home page is visible successfully
  await homePage.navigateHomePage();
  await homePage.verifyHomePage();

  //3-4 Click on 'Signup / Login' button and Verify 'New User Signup!' is visible
  await homePage.clickLoginButton(); 
  await loginPage.verifyLoginPageDisplayed();

  //5-6 Enter name and email address
  await loginPage.registerWithValidUser(newUser)
  await loginPage.clickSignUp();

  //7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await registerPage.verifyEnterAccountInformationTextDisplayed();

  //8. Fill details: Title, Name, Email, Password, Date of birth
  //9. Select checkbox 'Sign up for our newsletter!'
  //10. Select checkbox 'Receive special offers from our partners!'
  //11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await registerPage.fillUserInformation(newUser); 

  //12. Click 'Create Account button'
  await registerPage.clickWithText('Create Account');

  //13-14 Verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
  await registerPage.verifyAccountCreated();
  await registerPage.clickContinue();

  //15-16 Verify that 'Logged in as username' is visible and Click 'Delete Account' button
  await registerPage.verifyTextVisible(" Logged in as ");
  await registerPage.clickWithText(" Delete Account");
  
  //17. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await registerPage.verifyTextVisible("Account Deleted!");
  await registerPage.clickWithText('Continue');


});

test('Register User with existing email', async ({ homePage,loginPage }) => {

  const validUser = TestData.getValidUser(); 

  //1. Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

  //2. Verify that home page is visible successfully
  await homePage.verifyHomePage();

  //3. Click on 'Signup / Login' button
  await homePage.clickLoginButton(); 
  
  //4. Verify 'New User Signup!' is visible
  await loginPage.verifyLoginPageDisplayed();

  //5. Enter name and already registered email address
  await loginPage.registerWithInvalidUser(validUser);

  //6. Click 'Signup' button
  await loginPage.clickSignUp();

  //7. Verify error 'Email Address already exist!' is visible
  await loginPage.verifyEmailErrorMessage('Email Address already exist!');


});

