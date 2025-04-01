import {test} from "../../fixtures/customFixtures"
import { TestData } from "@/fixtures/test-data";

test('Login User with incorrect email and password',async({homePage,loginPage})=>{

    const invalidUser = TestData.getInvalidUser(); 

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Signup / Login' button
    await homePage.clickLoginButton();

    //Verify 'Login to your account' is visible
    await loginPage.verifyLoginPageDisplayed();

    //Enter incorrect email address and password
    await loginPage.loginWithCredential(invalidUser);

    //Click 'login' button
    await loginPage.clickLogin();

    //Verify error 'Your email or password is incorrect!' is visible
    await loginPage.verifyInvalidMailPasswordErrorMessageDisplayed();
})