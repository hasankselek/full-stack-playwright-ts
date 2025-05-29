import { TestData } from '@/fixtures/test-data';
import { test} from '../../fixtures/customFixtures';

test('Register User', async ({homePage,loginPage,registerPage}) => {

  const newUser = TestData.generateRandomUser(); 

  //Navigate to url 'http://automationexercise.com' and verify that home page is visible successfully
  await homePage.navigateHomePage();
  await homePage.verifyHomePage();

  //Click on 'Signup / Login' button and Verify 'New User Signup!' is visible
  await homePage.clickLoginButton(); 
  await loginPage.verifyLoginPageDisplayed();

  //Enter name and email address
  await loginPage.registerWithValidUser(newUser)
  await loginPage.clickSignUp();

  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await registerPage.verifyEnterAccountInformationTextDisplayed();

  //Fill details: Title, Name, Email, Password, Date of birth
  //Select checkbox 'Sign up for our newsletter!'
  //Select checkbox 'Receive special offers from our partners!'
  //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await registerPage.fillUserInformation(newUser); 

  //Click 'Create Account button'
  await registerPage.clickWithText('Create Account');

  //Verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
  await registerPage.verifyAccountCreated();
  await registerPage.clickContinue();

  //Verify that 'Logged in as username' is visible and Click 'Delete Account' button
  await registerPage.verifyTextVisible(" Logged in as ");
  await registerPage.clickWithText(" Delete Account");
  
  //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await registerPage.verifyTextVisible("Account Deleted!");
  await registerPage.clickWithText('Continue');


});

test('Register User with existing email', async ({ homePage,loginPage }) => {

  const validUser = TestData.getValidUser(); 

  //Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

  //Verify that home page is visible successfully
  await homePage.verifyHomePage();

  //Click on 'Signup / Login' button
  await homePage.clickLoginButton(); 
  
  //Verify 'New User Signup!' is visible
  await loginPage.verifyLoginPageDisplayed();

  //Enter name and already registered email address
  await loginPage.registerWithInvalidUser(validUser);

  //Click 'Signup' button
  await loginPage.clickSignUp();

  //Verify error 'Email Address already exist!' is visible
  await loginPage.verifyEmailErrorMessage('Email Address already exist!');


});

