import { test } from '../fixtures/customFixtures';
import { FakeData } from '../utils/fakeData';


test.afterAll('Close Page',async({page})=>{
    
    await page.close();
})

test('Test Case 4: Logout User', async ({ page,homePage,loginPage,commonSteps }) => {

  //1. Navigate to url 'http://automationexercise.com'
  await homePage.navigateHomePage();

  //2. Verify that home page is visible successfully
  await homePage.verifyHomePageIcon();

  //3. Click on 'Signup / Login' button
  await homePage.clickLoginButton(); 
  
  //4. Verify 'New User Signup!' is visible
  await loginPage.verifyLoginPageDisplayed();

  //5. Enter name and already registered email address
  await loginPage.firstRegister('asdasdas@gmail.com','Hasan','Küçükselek');

  //6. Click 'Signup' button
  await loginPage.clickSignUp();

  //7. Verify error 'Email Address already exist!' is visible
  await loginPage.verifyEmailErrorMessage('Email Address already exist!');

  

});