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
  private wrongAccError: Locator;
  private emailExistError: Locator;


  constructor(page: Page) {
    this.page = page;
    this.newUserSignUpText = page.locator("//h2[normalize-space()='New User Signup!']");
    this.nameBox = page.locator("//input[@placeholder='Name']");
    this.emailBox2 = page.locator("//input[@data-qa='signup-email']");
    this.signUpButton = page.locator("//button[normalize-space()='Signup']");
    this.emailBox1 = page.locator("input[data-qa='login-email']");
    this.passwordBox = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
    this.wrongAccError = page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    this.emailExistError = page.locator("//p[normalize-space()='Email Address already exist!']");
  }

  async login(email : string, password : string){
    await this.emailBox1.fill(email)
    await this.passwordBox.fill(password)
  }

  
  async verifyLoginPageDisplayed(): Promise<void> {
    await expect(this.newUserSignUpText).toBeVisible();
  }
  
  async firstRegister(mail : string, firstname : string, lastname : string): Promise<void>{
    await this.nameBox.fill(firstname+" "+lastname);
    await this.emailBox2.fill(mail);
  }

  async clickSignUp():Promise<void>{
    await this.signUpButton.click();
  }
  
  async clickLogin():Promise<void>{
    await this.loginButton.click();
  }

  async verifyErrorMessage():Promise<void>{
    await expect(this.wrongAccError).toBeVisible();
  }

  async verifyEmailErrorMessage(errorMessage: string): Promise<void> {
    
    const errorAlreadyEmailMessage = await this.emailExistError.textContent();
    
    if (errorAlreadyEmailMessage !== null) {
      await expect(errorAlreadyEmailMessage.trim()).toBe(errorMessage);
    } else {
      throw new Error('Email error message is not visible or null.');
    }
  }

}