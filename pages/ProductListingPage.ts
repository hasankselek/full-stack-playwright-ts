import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductListingPage extends BasePage{

    private readonly allProductsList: Locator;
    private readonly firstProduct: Locator;
    private readonly searchBox: Locator;
    private readonly searchButton: Locator;
    private readonly searchedProductList: Locator;
    private readonly addToChartList: Locator;
    private readonly continueShoppingButton: Locator;
    private readonly viewChartButton: Locator;
    private readonly productBox: Locator;

    constructor(page : Page) {
        super(page);
        this.allProductsList = page.locator("(//img[@alt='ecommerce website products'])");
        this.firstProduct = page.locator("(//a[contains(text(),'View Product')])[1]");
        this.searchBox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.searchedProductList = page.locator("div[class='productinfo text-center'] p");
        this.addToChartList = page.getByText('Add to cart');
        this.continueShoppingButton = page.locator(".btn.btn-success.close-modal.btn-block");
        this.viewChartButton = page.locator("(//u[normalize-space()='View Cart'])[1]")
        this.productBox = page.locator("(//div[@class='productinfo text-center'])")
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

    async clickAddToChart(productNumber: number) {
        const index = productNumber - 1; // 1 tabanlı → 0 tabanlı
        await this.smoothScrollToLocator(this.addToChartList.nth(index))
        await this.productBox.nth(index).hover()
        await this.clickElement(this.addToChartList.nth(index));
    }

    async clickContinueShopping(){
        await this.clickElement(this.continueShoppingButton)
        // Wait for the modal to close completely
        await this.page.waitForTimeout(1000)
    }

    async clickViewChart(){
        await this.clickElement(this.viewChartButton)
    }


}