import { Page, Locator, expect } from '@playwright/test';
import { FakeData } from '../utils/fakeData';

export class LoginPage {

  private page: Page;
  private newUserSignUpText: Locator;
  private nameBox: Locator;
  private emailBox2: Locator;
  private signUpButton: Locator;
  private emailBox1: Locator;
  private passwordBox: Locator;
  private loginButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.newUserSignUpText = page.locator("//h2[normalize-space()='New User Signup!']");
    this.nameBox = page.locator("//input[@placeholder='Name']");
    this.emailBox2 = page.locator("//input[@data-qa='signup-email']");
    this.signUpButton = page.locator("//button[normalize-space()='Signup']");
    this.emailBox1 = page.locator("input[data-qa='login-email']");
    this.passwordBox = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
  }

  async login(email : string, password : string){
    await this.emailBox1.fill(email)
    await this.passwordBox.fill(password)
  }

  
  async verifyLoginPageDisplayed(): Promise<void> {
    await expect(this.newUserSignUpText).toBeVisible();
  }
  
  async firstRegister(): Promise<void>{
    await this.nameBox.fill(FakeData.firstName+" "+FakeData.lastName);
    await this.emailBox2.fill(FakeData.email);
  }

  async clickSignUp():Promise<void>{
    await this.signUpButton.click();
  }
  
  async clickLogin():Promise<void>{
    await this.loginButton.click();
  }
}