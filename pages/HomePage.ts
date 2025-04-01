import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
  readonly homePageIcon: Locator;
  readonly loginButton: Locator;
  //readonly loggedInAsUsernameText: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.homePageIcon = page.locator("//img[@alt='Website for automation practice']");
    this.loginButton = page.locator("//a[normalize-space()='Signup / Login']");
    //this.loggedInAsUsernameText = page.locator("//li[10]//a[1]");
    this.logoutButton = page.locator("//a[normalize-space()='Logout']");
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
}