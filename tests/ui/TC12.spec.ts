import {test} from "../../fixtures/customFixtures"

test('Test Case 12: Add Products in Cart',async({homePage,productListingPage,cartPage})=>{

    //Navigate to url 'http://automationexercise.com'
    await homePage.navigateHomePage();

    //Verify that home page is visible successfully
    await homePage.verifyHomePage();

    //Click on 'Products' button
    await homePage.clickProductsButton();

    //Block Ads
    await homePage.blockCommonAds();

    //Hover over first product and click 'Add to cart'
    await productListingPage.clickAddToChart(1)
    
    //Click 'Continue Shopping' button
    await productListingPage.clickContinueShopping()

    //Hover over second product and click 'Add to cart'
    await productListingPage.clickAddToChart(3)

    //Click 'View Cart' button
    await productListingPage.clickViewChart();

    //Verify both products are added to Cart
    await cartPage.verifyAddedProductsVisibility();

    //Verify their prices, quantity and total price
    await cartPage.verifyProductsInformations();


})  