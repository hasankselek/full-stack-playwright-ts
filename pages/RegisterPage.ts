import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '@/models/user';

export class RegisterPage extends BasePage {

  private readonly enterAccountInformationText: Locator;
  private readonly idGender: Locator;
  private readonly passwordBox: Locator;
  private readonly dayDD: Locator;
  private readonly monthDD: Locator;
  private readonly yearDD: Locator;
  private readonly newsletterBox: Locator;
  private readonly offersBox: Locator;
  private readonly firstNameBox: Locator;
  private readonly lastNameBox: Locator;
  private readonly addressBox: Locator;
  private readonly countryDD: Locator;
  private readonly stateBox: Locator;
  private readonly cityBox: Locator;
  private readonly zipCodeBox: Locator;
  private readonly mobileNumberBox: Locator;
  private readonly accountCreatedText: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.enterAccountInformationText = page.locator("//b[normalize-space()='Enter Account Information']");
    this.idGender = page.locator("#id_gender1");
    this.passwordBox = page.locator("#password");
    this.dayDD = page.locator("//select[@id='days']");
    this.monthDD = page.locator("//select[@id='months']");
    this.yearDD = page.locator("//select[@id='years']");
    this.newsletterBox = page.locator("#newsletter");
    this.offersBox = page.locator("#optin");
    this.firstNameBox = page.locator("#first_name");
    this.lastNameBox = page.locator("#last_name");
    this.addressBox = page.locator("#address1");
    this.countryDD = page.locator("#country");
    this.stateBox = page.locator("#state");
    this.cityBox = page.locator("#city");
    this.zipCodeBox = page.locator("#zipcode");
    this.mobileNumberBox = page.locator("#mobile_number");
    this.accountCreatedText = page.locator("//b[normalize-space()='Account Created!']");
    this.continueButton = page.locator("//a[@class='btn btn-primary']")
  }

  async verifyEnterAccountInformationTextDisplayed(): Promise<void> {
    await expect(this.enterAccountInformationText).toBeVisible();
  }


  async fillUserInformation(user: User): Promise<void> {


    await this.idGender.click();
    await this.passwordBox.fill(user.password);
    await this.dayDD.selectOption(user.day);
    await this.monthDD.selectOption(user.month);
    await this.yearDD.selectOption(user.year);
    await this.newsletterBox.check();
    await this.offersBox.check();
    await this.zipCodeBox.scrollIntoViewIfNeeded();
    await this.firstNameBox.fill(user.firstName);
    await this.lastNameBox.fill(user.lastName);
    await this.addressBox.fill(user.address);
    await this.countryDD.selectOption(user.country);
    await this.stateBox.fill(user.state);
    await this.cityBox.fill(user.city);
    await this.zipCodeBox.fill(user.zipcode);
    await this.mobileNumberBox.fill(user.phone);

    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedText).toBeVisible();
  }


}