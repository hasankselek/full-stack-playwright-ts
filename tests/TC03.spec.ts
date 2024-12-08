import { test } from '../fixtures/customFixtures';


test.afterAll('Close Page',async({page})=>{
    
    await page.close();
})

test('Test Case 3: Login User with incorrect email and password', async ({ homePage,loginPage,commonSteps }) => {

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