import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '@/models/user';

export class HomePage extends BasePage{
  readonly homePageIcon: Locator;
  readonly loginButton: Locator;
  //readonly loggedInAsUsernameText: Locator;
  readonly logoutButton: Locator;
  readonly testCasesButton: Locator;
  readonly productsButton: Locator;
  readonly subscribeEmailBox: Locator;
  readonly subscribeButton: Locator;

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
}