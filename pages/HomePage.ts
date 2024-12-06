import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  private page: Page;
  private homePageIcon: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageIcon = page.locator("//img[@alt='Website for automation practice']");
    this.loginButton = page.locator("//a[normalize-space()='Signup / Login']");
  }

  async navigateHomePage(): Promise<void>{
    await this.page.goto("/",{waitUntil:"commit"});

  }

  async verifyHomePageIcon(): Promise<void> {
    await expect(this.homePageIcon).toBeVisible();
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
}