import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailingPage extends BasePage{

    readonly productName: Locator;
    readonly productCategory: Locator;
    readonly productPrice: Locator;
    readonly productAvailability: Locator;
    readonly productCondition: Locator;
    readonly productBrand: Locator;
    readonly inputQuantityBox: Locator;
    readonly addToCartButton: Locator;

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
}