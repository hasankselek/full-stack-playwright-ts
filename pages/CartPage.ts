import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{

    readonly totalCartProductsList: Locator;
    readonly productsPrice: Locator;
    readonly productsDescription: Locator;
    readonly productsTotalPrices: Locator;

    constructor(page : Page){
        super(page);
        this.totalCartProductsList = page.locator("(//img[@alt='Product Image'])")
        this.productsPrice = page.locator("(//td[@class='cart_price'])")
        this.productsDescription = page.locator("(//td[@class='cart_description'])")
        this.productsTotalPrices = page.locator("(//td[@class='cart_total'])")
    }

    async verifyAddedProductsVisibility() {
        await this.page.waitForSelector("//img[@alt='Product Image']", { timeout: 5000 });
        const productQuantity = await this.totalCartProductsList.count();
        await expect(productQuantity, 'Sepette hiç ürün bulunamadı').toBeGreaterThan(0);
    }

    async verifyProductsInformations() {
        const price1 = await this.productsPrice.nth(0).innerText();
        const total1 = await this.productsTotalPrices.nth(0).innerText();
        expect(price1).toBe(total1);
      
        const desc1 = await this.productsDescription.nth(0).innerText();
        expect(desc1).toContain("Blue Top");
      
        const price2 = await this.productsPrice.nth(1).innerText();
        const total2 = await this.productsTotalPrices.nth(1).innerText();
        expect(price2).toBe(total2);
      
        const desc2 = await this.productsDescription.nth(1).innerText();
        expect(desc2).toContain("Men Tshirt");
      }

}