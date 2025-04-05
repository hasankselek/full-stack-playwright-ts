import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class BrandsProductsPage extends BasePage{

    readonly brandPageTitle: Locator; 
    readonly brandProductList: Locator;
  

    constructor(page:Page){
        super(page);
        this.brandPageTitle = page.locator(".title.text-center")
        this.brandProductList = page.locator("(//div[@class='productinfo text-center'])")
    }

    async verifyBrandTitleVisible(title:string){
        this.assertElementContainsText(this.brandPageTitle,title)
    }

    async verifyProductsVisible(){
        const productNumber = await this.brandProductList.count();
        for (let i = 0; i < productNumber; i++) {
            await expect(this.brandProductList.nth(i)).toBeVisible()
        }
    }

    
    
}