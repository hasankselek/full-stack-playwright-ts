import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestData } from '@/fixtures/test-data';

export class LoginPage extends BasePage{

  readonly newUserSignUpText: Locator;
  readonly nameBox: Locator;
  readonly emailBox2: Locator;
  readonly signUpButton: Locator;
  readonly emailBox1: Locator;
  readonly passwordBox: Locator;
  readonly loginButton: Locator;
  readonly wrongAccError: Locator;
  readonly emailExistError: Locator;


  constructor(page: Page) {
    super(page);
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
    await this.typeText(this.emailBox1,email)
    await this.typeText(this.passwordBox,password)
    return this
  }

  async verifyLoginPageDisplayed(){
    await this.isElementVisible(this.newUserSignUpText)
    return this;
  }
  
  async firstRegister(){
    const validUser = TestData.getValidUser()
    await this.typeText(this.nameBox,validUser.firstName+" "+validUser.lastName)
    await this.typeText(this.emailBox2,validUser.email)
    return this
  }

  async clickSignUp(){
    await this.signUpButton.click();
    return this
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