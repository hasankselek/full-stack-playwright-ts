import { TestData } from "@/fixtures/test-data";
import { test } from "../../fixtures/customFixtures"


test('Contact Us Form', async ({page, homePage, contactUsPage }) => {

    const subjectMessage = TestData.getContactMessage();

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Contact Us' button
    await homePage.clickWithText(" Contact us")

    //Verify 'GET IN TOUCH' is visible
    await contactUsPage.verifyGetInTouchVisible();

    //Enter name, email, subject , message and file
    await contactUsPage.fillContactUsMessage(subjectMessage);

    // Set up dialog handler BEFORE clicking submit
    page.on('dialog', async dialog => {await dialog.accept();});

    // Add a wait to ensure the form submission completes
    await page.waitForTimeout(2000);

    //Click 'Submit' button
    await contactUsPage.clickSubmitButton();
    
    //Verify success message 'Success! Your details have been submitted successfully.' is visible
    await contactUsPage.verifySuccessMessageVisible("Success! Your details have been submitted successfully.");

    //Click 'Home' button and verify that landed to home page successfully
    await contactUsPage.clickReturnHomeButton();
})