import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{

    private readonly totalCartProductsList: Locator;
    private readonly productsPrice: Locator;
    private readonly productsDescription: Locator;
    private readonly productsTotalPrices: Locator;
    private readonly productQuantity: Locator;
    private readonly checkoutButton: Locator;
    private readonly registerLoginLink: Locator;
    private readonly quantityDeleteIcon: Locator;
    private readonly emptyCart: Locator;
    
    constructor(page : Page){
        super(page);
        this.totalCartProductsList = page.locator("(//img[@alt='Product Image'])")
        this.productsPrice = page.locator("(//td[@class='cart_price'])")
        this.productsDescription = page.locator("(//td[@class='cart_description'])")
        this.productsTotalPrices = page.locator("(//td[@class='cart_total'])")
        this.productQuantity = page.locator(".cart_quantity")
        this.checkoutButton = page.locator(".btn.btn-default.check_out")
        this.registerLoginLink = page.locator("//u[normalize-space()='Register / Login']")
        this.quantityDeleteIcon = page.locator("//a[@class='cart_quantity_delete']")
        this.emptyCart = page.locator("#empty_cart")
    }

    async verifyAddedProductsVisibility() {
        await this.page.waitForSelector("//img[@alt='Product Image']", { timeout: 5000 });
        const productQuantity = await this.totalCartProductsList.count();
        await expect(productQuantity).toBeGreaterThan(0);
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

      async verifyProductQuantity(quantity:string){
        let actualQuantity = await this.productQuantity.first().innerText()
        let expectedQuantity = quantity
        expect(actualQuantity).toBe(expectedQuantity)
      }

      async clickCheckoutButton(){
        await this.clickElement(this.checkoutButton)
      }

      async clickRegisterLoginLink(){
        await this.clickElement(this.registerLoginLink)
      }

      async clickQuantityDeleteIcon(){
        await this.clickElement(this.quantityDeleteIcon)
      }

      async verifyEmptyCart(){
        await this.assertElementContainsText(this.emptyCart,"Cart is empty!")
      }

}