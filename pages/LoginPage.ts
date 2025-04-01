import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestData } from '@/fixtures/test-data';
import { User } from '@/models/user';

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
  readonly invalidMailPasswordError: Locator;
  readonly existingMailError:Locator;


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
    this.invalidMailPasswordError = page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    this.existingMailError = page.locator("//p[normalize-space()='Email Address already exist!']");
  }

  async loginWithCredential(user:User){
    await this.typeText(this.emailBox1,user.email)
    await this.typeText(this.passwordBox,user.password)
  }

  async verifyLoginPageDisplayed(){
    await this.isElementVisible(this.newUserSignUpText)
  }
  
  async registerWithValidUser(user:User){
    await this.typeText(this.nameBox,user.firstName+" "+user.lastName)
    await this.typeText(this.emailBox2,user.email) 
  }

  async registerWithInvalidUser(user:User){
    await this.typeText(this.nameBox,user.firstName+" "+user.lastName)
    await this.typeText(this.emailBox2,user.email) 
  }

  async clickSignUp(){
    await this.clickElement(this.signUpButton)
  }
  
  async clickLogin():Promise<void>{
    await this.clickElement(this.loginButton)
  }

  async verifyErrorMessage():Promise<void>{
    await this.isElementVisible(this.wrongAccError)
  }

  async verifyEmailErrorMessage(errorMessage: string): Promise<void> {
    
    const errorAlreadyEmailMessage = await this.emailExistError.textContent();
    
    if (errorAlreadyEmailMessage !== null) {
      await expect(errorAlreadyEmailMessage.trim()).toBe(errorMessage);
    } else {
      throw new Error('Email error message is not visible or null.');
    }
  }

  async verifyInvalidMailPasswordErrorMessageDisplayed(){
    await this.assertElementContainsText(this.invalidMailPasswordError,"Your email or password is incorrect!")
  }

  async verifyLoginPage(){
    await this.verifyNavigateExpectedPage("https://automationexercise.com/login")
  }

  async verifyExistingMailErrorMessageDisplayed(){
    await this.assertElementContainsText(this.existingMailError,"Email Address already exist!")
  }
}