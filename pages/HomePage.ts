import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '@/models/user';
import { wait } from '@/utils/testUtils';

export class HomePage extends BasePage{
 
  private readonly homePageIcon: Locator;
  private readonly loginButton: Locator;
  private readonly logoutButton: Locator;
  private readonly testCasesButton: Locator;
  private readonly productsButton: Locator;
  private readonly subscribeEmailBox: Locator;
  private readonly subscribeButton: Locator;
  private readonly cartButton: Locator;
  private readonly viewProductButtons: Locator;
  private readonly categoryTitles: Locator;
  private readonly womenSubCategorys: Locator;
  private readonly categoryTitless: Locator;
  private readonly dressText: Locator;
  private readonly tshirtText: Locator;
  private readonly brandsText: Locator;
  private readonly homepageText: Locator;
  private readonly scrollUpButton: Locator; 
  private readonly recommendItemsText: Locator;
  private readonly addToCartButton: Locator;  

  constructor(page: Page) {
    super(page);
    this.homePageIcon = page.locator("//img[@alt='Website for automation practice']");
    this.loginButton = page.locator("//a[normalize-space()='Signup / Login']");
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
    this.brandsText = page.locator("//h2[normalize-space()='Brands']");
    this.homepageText = page.locator("div[class='item active'] div[class='col-sm-6'] h2");
    this.scrollUpButton = page.locator("//a[@id='scrollUp']");
    this.recommendItemsText = page.locator("//h2[normalize-space()='Recommended Items']");
    this.addToCartButton = page.locator("//div[@class='item active']//div[1]//div[1]//div[1]//div[1]//a[1]");
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

  async verifyBrandTextVisible(){
    await this.smoothScrollToLocator(this.brandsText)
    await this.isElementVisible(this.brandsText)
  }

  async verifyHomePageTextVisible(text: string){
    await this.isElementVisible(this.homepageText)
    await this.assertElementContainsText(this.homepageText, text);
  }

  async clickScrollUpButton() {
    await this.clickElement(this.scrollUpButton);
    await wait(500); 
  }

  async verifyRecommendedItemsTextVisible() {
    await this.isElementVisible(this.recommendItemsText);
  }

  async clickAddToCartButton() {
    await this.clickElement(this.addToCartButton);
    await wait(500); 
  }
  
}