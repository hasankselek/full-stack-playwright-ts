import {test} from "../../fixtures/customFixtures"

test('Test Case 7: Verify Test Cases Page',async({homePage,testCasePage})=>{

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Test Cases' button
    await homePage.clickTestCases();

    //Verify user is navigated to test cases page successfully
    await testCasePage.verifyNavigateExpectedPage("https://automationexercise.com/test_cases")

})