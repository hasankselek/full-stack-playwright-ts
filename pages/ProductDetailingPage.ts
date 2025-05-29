import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailingPage extends BasePage{

    private readonly productName: Locator;
    private readonly productCategory: Locator;
    private readonly productPrice: Locator;
    private readonly productAvailability: Locator;
    private readonly productCondition: Locator;
    private readonly productBrand: Locator;
    private readonly inputQuantityBox: Locator;
    private readonly addToCartButton: Locator;
    private readonly writeYourReviewButton: Locator;
    private readonly nameBox : Locator;
    private readonly emailBox : Locator;
    private readonly reviewBox : Locator;
    private readonly submitButton : Locator;
    private readonly successMessage: Locator;

    constructor(page:Page){
        super(page);
        this.productName = page.locator("div[class='product-information'] h2");
        this.productCategory = page.locator("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)");
        this.productPrice = page.locator("div[class='product-information'] span span");
        this.productAvailability = page.locator("//div[@class='product-details']//p[2]");
        this.productCondition = page.locator("//div[@class='product-details']//p[3]")
        this.productBrand = page.locator("//div[@class='product-details']//p[4]")
        this.inputQuantityBox = page.locator("#quantity")
        this.addToCartButton = page.locator("//button[normalize-space()='Add to cart']");
        this.writeYourReviewButton = page.locator("//a[normalize-space()='Write Your Review']");
        this.nameBox = page.locator("(//input[@id='name'])[1]");
        this.emailBox = page.locator("(//input[@id='email'])[1]");
        this.reviewBox = page.locator("(//textarea[@id='review'])[1]");
        this.submitButton = page.locator("#button-review");
        this.successMessage = page.locator("(//div[@class='alert-success alert'])[1]");
    }


    async verifyProductInformationVisible(){
        await this.isElementVisible(this.productName);
        await this.isElementVisible(this.productCategory);
        await this.isElementVisible(this.productPrice);
        await this.isElementVisible(this.productAvailability);
        await this.isElementVisible(this.productCondition);
        await this.isElementVisible(this.productBrand);
    }

    async inputQuantity(quantity:string){
        await this.inputQuantityBox.clear()
        await this.typeText(this.inputQuantityBox,quantity)
    }

    async clickAddToChartButton(){
        this.clickElement(this.addToCartButton)
    }

    async verifyWriteYourReviewButtonVisible(){
        await this.isElementVisible(this.writeYourReviewButton);
    }

    async enterName(name:string){
        await this.typeText(this.nameBox,name);
        await this.page.waitForTimeout(2000);
    }

    async enterEmail(email:string){
        await this.typeText(this.emailBox,email);
        await this.page.waitForTimeout(2000);
    }

    async enterReview(review:string){
        await this.typeText(this.reviewBox,review);
        await this.page.waitForTimeout(2000);
    }

    async clickSubmitButton(){
        await this.clickElement(this.submitButton);
    }

    async verifySuccessMessageVisible(){
        await this.isElementVisible(this.successMessage);
        const message = await this.successMessage.textContent();
        expect(message).toContain("Thank you for your review.");
    }
}