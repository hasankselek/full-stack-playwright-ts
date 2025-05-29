import {test} from "../../fixtures/customFixtures"

test('Test Case 13: Verify Product quantity in Cart',async({homePage,productDetailingPage,productListingPage,cartPage})=>{

    let productQuantity = "4";

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click 'View Product' for any product on home page
    await homePage.clickRandomViewProduct(1)

    //Verify product detail is opened
    await productDetailingPage.verifyNavigateContainExpectedPage("https://automationexercise.com/product_details")

    //Increase quantity to 4
    await productDetailingPage.inputQuantity(productQuantity);

    //Click 'Add to cart' button
    await productDetailingPage.clickAddToChartButton()
    
    //Click 'View Cart' button
    await productListingPage.clickViewChart();
    
    //Verify that product is displayed in cart page with exact quantity
    await cartPage.verifyProductQuantity(productQuantity)
    
    


})  