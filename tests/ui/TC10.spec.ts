import { TestData } from "@/fixtures/test-data";
import {test} from "../../fixtures/customFixtures";

test('Test Case 10: Verify Subscription in home page', async ({homePage }) => {

    const email = TestData.generateRandomUser(); 

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Scroll down to footer
    await homePage.scroolDownFooter();
    
    //Verify text 'SUBSCRIPTION'
    await homePage.verifyTextVisible("Subscription")

    //Enter email address in input and click arrow button
    await homePage.verifySubscription(email)

    //Verify success message 'You have been successfully subscribed!' is visible
    await homePage.waitForElementAssertVisibleByText("You have been successfully subscribed!")

    
});