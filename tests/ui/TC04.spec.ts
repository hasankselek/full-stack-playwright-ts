import { TestData } from "@/fixtures/test-data";
import{test} from "../../fixtures/customFixtures"

test('Logout User',async({homePage,loginPage})=>{

    const validUser = TestData.getValidUser();

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();
    
    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Signup / Login' button
    await homePage.clickLoginButton();

    //Verify 'Login to your account' is visible
    await loginPage.verifyLoginPageDisplayed();

    //Enter correct email address and password
    await loginPage.loginWithCredential(validUser);

    //Click 'login' button
    await loginPage.clickLogin();

    //Verify that 'Logged in as username' is visible
    await homePage.verifyLoggedInAsUsernameTextVisible();

    //Click 'Logout' button
    await homePage.clickLogout();

    //Verify that user is navigated to login page
    await loginPage.verifyLoginPage();


})