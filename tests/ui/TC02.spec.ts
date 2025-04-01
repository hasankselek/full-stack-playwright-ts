import {test} from "../../fixtures/customFixtures"
import { TestData } from "@/fixtures/test-data";

test("Login User with correct email and password",async({homePage,loginPage,registerPage})=>{

    const newUser = TestData.generateRandomUser(); 

    //Create new use
    await homePage.navigateHomePage();
    await homePage.clickLoginButton(); 
    await loginPage.registerWithValidUser(newUser)
    await loginPage.clickSignUp();
    await registerPage.fillUserInformation(newUser);
    await registerPage.clickWithText('Create Account');
    await registerPage.verifyAccountCreated();
    await registerPage.clickContinue(); 
    await homePage.clickLogout();

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();
    
    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Signup / Login' button
    await homePage.clickLoginButton();

    //Verify 'Login to your account' is visible
    await loginPage.verifyLoginPageDisplayed();

    //Enter correct email address and password
    await loginPage.loginWithCredential(newUser);

    //Click 'login' button
    await loginPage.clickLogin();

    //Verify that 'Logged in as username' is visible
    await homePage.verifyLoggedInAsUsernameTextVisible();

    // Click 'Delete Account' button
    await registerPage.clickWithText(" Delete Account");

    //Verify that 'ACCOUNT DELETED!' is visible
    await registerPage.verifyTextVisible("Account Deleted!");
})