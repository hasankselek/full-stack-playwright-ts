import { test } from '../fixtures/customFixtures';
import { FakeData } from '../utils/fakeData';

test.beforeAll('Creating User',async({homePage,loginPage,registerPage,commonSteps})=>{

  await homePage.navigateHomePage();

  await homePage.clickLoginButton(); 

  await loginPage.firstRegister(FakeData.email,FakeData.firstName,FakeData.lastName);

  await loginPage.clickSignUp();

  await registerPage.fillUserInformation('2','9','1996',"India"); 

  await commonSteps.clickWithText('Create Account');

  await registerPage.clickContinue();

  await commonSteps.clickWithText(" Logout")

})

test.afterAll('Close Page',async({page})=>{
    
    await page.close();
})

test('Login User with correct email and password', async ({ page,homePage,loginPage,commonSteps }) => {

  //1. Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

  //2. Verify that home page is visible successfully
  await homePage.verifyHomePageIcon();

  //3. Click on 'Signup / Login' button
  await homePage.clickLoginButton(); 
  
  //4. Verify 'Login to your account' is visible
  await commonSteps.verifyTextVisible('Login to your account');

  //5. Enter correct email address and password
  await loginPage.login(FakeData.email,FakeData.password);

  //6. Click 'login' button
  await loginPage.clickLogin();

  //7. Verify that 'Logged in as username' is visible
  await commonSteps.verifyTextVisible(" Logged in as ");

  //8. Click 'Delete Account' button
  await commonSteps.clickWithText(" Delete Account");
  
  //9. Verify that 'ACCOUNT DELETED!' is visible 
  await commonSteps.verifyTextVisible("Account Deleted!");
  

});

test('Login User with incorrect email and password', async ({ homePage,loginPage,commonSteps }) => {

  //1. Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

  //2. Verify that home page is visible successfully
  await homePage.verifyHomePageIcon();

  //3. Click on 'Signup / Login' button
  await homePage.clickLoginButton(); 
  
  //4. Verify 'Login to your account' is visible
  await commonSteps.verifyTextVisible('Login to your account');

  //5. Enter correct email address and password
  await loginPage.login('asjdajsd@gmail.com','123123');

  //6. Click 'login' button
  await loginPage.clickLogin();

  //7. Verify error 'Your email or password is incorrect!' is visible
  await loginPage.verifyErrorMessage();
 
  

});