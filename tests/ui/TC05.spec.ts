import { TestData } from "@/fixtures/test-data";
import{test} from "../..//fixtures/customFixtures"

test('Register User with existing email',async({homePage,loginPage})=>{

    const existingUser = TestData.getValidUser();

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();
  
    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Signup / Login' button
    await homePage.clickLoginButton(); 

    //Verify 'New User Signup!' is visible
    await loginPage.verifyLoginPageDisplayed();

    //Enter name and already registered email address
    await loginPage.registerWithValidUser(existingUser)
  
    //Click 'Signup' button
    await loginPage.clickSignUp();

    //Verify error 'Email Address already exist!' is visible
    await loginPage.verifyExistingMailErrorMessageDisplayed();

    

})