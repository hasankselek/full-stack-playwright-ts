import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductListingPage extends BasePage{

    readonly allProductsList: Locator;
    readonly firstProduct: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchedProductList: Locator;

    constructor(page : Page) {
        super(page);
        this.allProductsList = page.locator("(//img[@alt='ecommerce website products'])");
        this.firstProduct = page.locator("(//a[contains(text(),'View Product')])[1]");
        this.searchBox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.searchedProductList = page.locator("div[class='productinfo text-center'] p");
    }    

    async verifyProductsListVisible(){
        const productCount = await this.allProductsList.count();
        for (let i = 0; i < productCount; i++) {
            const product = this.allProductsList.nth(i); 
            await expect(product).toBeVisible(); 
        }
    }

    async clickFirstProduct(){
        await this.clickElement(this.firstProduct)
    }

    async searchProduct(productName:string){
        await this.typeText(this.searchBox,productName)
        await this.clickElement(this.searchButton)
    }

    async verifySearchProductCorrect(productName:string){
        const productCount = await this.searchedProductList.count();
        for (let i = 0; i < productCount; i++) {
            const product = this.searchedProductList.nth(i); 
            await this.assertElementContainsText(product,productName)
        }
        
    }
}