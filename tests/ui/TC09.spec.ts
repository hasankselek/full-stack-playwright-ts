import {test} from "../../fixtures/customFixtures"

test('Test Case 9: Search Product',async({homePage,productListingPage})=>{

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Products' button
    await homePage.clickProductsButton();

    //Verify user is navigated to ALL PRODUCTS page successfully
    await productListingPage.verifyNavigateExpectedPage("https://automationexercise.com/products")

    //Enter product name in search input and click search button
    await productListingPage.searchProduct("Men Tshirt")

    //Verify 'SEARCHED PRODUCTS' is visible
    await productListingPage.verifyTextVisible("Searched Products")

    //Verify all the products related to search are visible
    await productListingPage.verifySearchProductCorrect("Men Tshirt")


})  