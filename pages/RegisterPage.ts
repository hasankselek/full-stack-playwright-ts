import { Page, Locator, expect } from '@playwright/test';
import { FakeData } from '../utils/fakeData';

export class RegisterPage{

    private page: Page;
    private enterAccountInformationText: Locator;
    private idGender: Locator;
    private passwordBox: Locator;
    private dayDD: Locator;
    private monthDD: Locator;
    private yearDD: Locator;
    private newsletterBox: Locator;
    private offersBox: Locator;
    private firstNameBox: Locator;
    private lastNameBox: Locator;
    private addressBox: Locator;
    private countryDD: Locator;
    private stateBox: Locator;
    private cityBox: Locator;
    private zipCodeBox: Locator;
    private mobileNumberBox: Locator;
    private createAccountButton: Locator;
    private accountCreatedText: Locator;
    private continueButton: Locator;

    constructor(page : Page){
        this.page = page;
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
        this.createAccountButton = page.locator("//button[normalize-space()='Create Account']");
        this.accountCreatedText = page.locator("//b[normalize-space()='Account Created!']");
        this.continueButton = page.locator("//a[@class='btn btn-primary']")
    }

    async verifyEnterAccountInformationTextDisplayed():Promise<void>{
        await expect(this.enterAccountInformationText).toBeVisible();
    }
    

    async fillUserInformation(day: string, month: string, year: string,country :string): Promise<void> {
        await this.idGender.click();
        await this.passwordBox.fill(FakeData.password);
        await this.dayDD.selectOption(day); 
        await this.monthDD.selectOption(month); 
        await this.yearDD.selectOption(year); 
        await this.newsletterBox.check();
        await this.offersBox.check();
      
        await this.zipCodeBox.scrollIntoViewIfNeeded();
      
        await this.firstNameBox.fill(FakeData.firstName);
        await this.lastNameBox.fill(FakeData.lastName);
        await this.addressBox.fill(FakeData.address);
        await this.countryDD.selectOption(country);
        await this.stateBox.fill(FakeData.state);
        await this.cityBox.fill(FakeData.city);
        await this.zipCodeBox.fill(FakeData.zipcode);
        await this.mobileNumberBox.fill(FakeData.phone);

        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
          });
      }

      async clickContinue(){
        await this.continueButton.click();
      }

      async verifyAccountCreated(){
        await expect(this.accountCreatedText).toBeVisible();
      }


}