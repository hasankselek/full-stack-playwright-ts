import {test} from "../../fixtures/customFixtures"

test('Test Case 8: Verify All Products and product detail page',async({homePage,productListingPage,productDetailingPage})=>{

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Products' button
    await homePage.clickProductsButton();

    //Verify user is navigated to ALL PRODUCTS page successfully
    await productListingPage.verifyNavigateExpectedPage("https://automationexercise.com/products")

    //The products list is visible
    await productListingPage.verifyProductsListVisible();

    //Click on 'View Product' of first product
    await productListingPage.clickFirstProduct();

    //User is landed to product detail page
    await productListingPage.verifyNavigateExpectedPage("https://automationexercise.com/product_details/1")

    //Verify that detail detail is visible: product name, category, price, availability, condition, brand
    await productDetailingPage.verifyProductInformationVisible();


})