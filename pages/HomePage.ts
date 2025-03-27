import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
  readonly homePageIcon: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.homePageIcon = page.locator("//img[@alt='Website for automation practice']");
    this.loginButton = page.locator("//a[normalize-space()='Signup / Login']");
  }

  async navigateHomePage(){
    await this.page.goto("/",{waitUntil:"commit"});
    return this;
  }

  async verifyHomePageIcon(){
    await this.isElementVisible(this.homePageIcon)
    return this;
  }

  async clickLoginButton(){
    await this.clickElement(this.loginButton)
    return this;
  }
}