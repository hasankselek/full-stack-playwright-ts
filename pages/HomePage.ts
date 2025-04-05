import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '@/models/user';
import { wait } from '@/utils/testUtils';

export class HomePage extends BasePage{
  readonly homePageIcon: Locator;
  readonly loginButton: Locator;
  //readonly loggedInAsUsernameText: Locator;
  readonly logoutButton: Locator;
  readonly testCasesButton: Locator;
  readonly productsButton: Locator;
  readonly subscribeEmailBox: Locator;
  readonly subscribeButton: Locator;
  readonly cartButton: Locator;
  readonly viewProductButtons: Locator;
  readonly categoryTitles: Locator;
  readonly womenSubCategorys: Locator;
  readonly categoryTitless: Locator;
  readonly dressText: Locator;
  readonly tshirtText: Locator;

  constructor(page: Page) {
    super(page);
    this.homePageIcon = page.locator("//img[@alt='Website for automation practice']");
    this.loginButton = page.locator("//a[normalize-space()='Signup / Login']");
    //this.loggedInAsUsernameText = page.locator("//li[10]//a[1]");
    this.logoutButton = page.locator("//a[normalize-space()='Logout']");
    this.testCasesButton = page.locator("(//a[normalize-space()='Test Cases'])[1]")
    this.productsButton = page.locator("(//a[@href='/products'])[1]")
    this.subscribeEmailBox = page.locator("//input[@id='susbscribe_email']")
    this.subscribeButton = page.locator("//button[@id='subscribe']")
    this.cartButton = page.locator("//a[normalize-space()='Cart']")
    this.viewProductButtons = page.locator("(//a[contains(text(),'View Product')])")
    this.categoryTitles = page.locator("(//div[@class='panel-heading'])")
    this.womenSubCategorys = page.locator("//div[@id='Women']//li")
    this.categoryTitless = page.locator("(//span[@class='badge pull-right'])")
    this.dressText = page.locator("//div[@id='Women']//a[contains(text(),'Dress')]");
    this.tshirtText = page.locator("//a[normalize-space()='Tshirts']");
  }

  async navigateHomePage(){
    await this.page.goto("/",{waitUntil:"commit"});
  }

  async verifyHomePage(){
    await this.verifyNavigateExpectedPage("https://automationexercise.com/")
  }

  async clickLoginButton(){
    await this.clickElement(this.loginButton)
  }

  async verifyLoggedInAsUsernameTextVisible(){
    await this.verifyTextVisible(" Logged in as ")
  }

  async clickLogout(){
    await this.clickElement(this.logoutButton)
  }

  async clickCart(){
    await this.clickElement(this.cartButton)
  }

  async clickTestCases(){
    await this.clickElement(this.testCasesButton)
  }

  async clickProductsButton(){
    await this.clickElement(this.productsButton)
  }

  async verifySubscription(user:User){
    await this.typeText(this.subscribeEmailBox,user.email)
    await this.clickElement(this.subscribeButton)
  }

  async waitForElementAssertVisibleByText(text: string): Promise<void> {
    const element = this.page.locator(`text=${text}`);
    await expect(element).toBeVisible();
  }

  async clickRandomViewProduct(product:number){
    const productNumber = product - 1
    await this.smoothScrollToLocator(this.viewProductButtons.nth(productNumber))
    await this.clickElement(this.viewProductButtons.nth(productNumber))
  }

  async verifyCategoryTitlesVisible() {
    const categoryTitlesCount = await this.categoryTitles.count();
    
    // Her kategori başlığı için kontrol yapıyoruz
    for (let i = 0; i < categoryTitlesCount; i++) {
        const category = this.categoryTitles.nth(i);  // nth() kullanarak öğeye erişiyoruz
        
        // Her bir öğenin görünür olmasını bekliyoruz
        await expect(category).toBeVisible();
    }
}

  async clickWomenCategory() {
    await this.clickElement(this.categoryTitless.first())
  }

  async clickSelectedWomenSubCategory() {
    await this.smoothScrollToLocator(this.dressText)
    await this.clickElement(this.dressText);
    
  }
  
  async clickManCategory(){
    await this.categoryTitless.nth(1).click();
    await this.tshirtText.nth(0).click();
  }
  
}