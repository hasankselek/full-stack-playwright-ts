import { Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';
import { Subject } from '@/models/subject';

export class ContactUsPage extends BasePage{

    private readonly getInTouchText: Locator;
    private readonly nameBox: Locator;
    private readonly mailBox: Locator;
    private readonly subjectBox: Locator;
    private readonly messageBox: Locator;
    private readonly fileSelectBox: Locator;
    private readonly submitButton: Locator;
    private readonly successMessage: Locator;
    private readonly returnHomeButton: Locator;


    constructor(page:Page){
        super(page)
        this.getInTouchText = page.locator("//h2[normalize-space()='Get In Touch']");
        this.nameBox = page.getByPlaceholder("Name");
        this.mailBox = page.locator("//input[@placeholder='Email']")
        this.subjectBox = page.getByPlaceholder("Subject");
        this.messageBox = page.getByPlaceholder("Message");
        this.fileSelectBox = page.locator("//input[@name='upload_file']");
        this.submitButton = page.locator("//input[@name='submit']");
        this.successMessage = page.locator("//div[@class='status alert alert-success']");
        this.returnHomeButton = page.locator("//span[normalize-space()='Home']")
    }

    async verifyGetInTouchVisible(){
        await this.assertElementContainsText(this.getInTouchText,"Get In Touch");
    }

    async fillContactUsMessage(subject: Subject){
        await this.typeText(this.nameBox,subject.name);
        await this.typeText(this.mailBox,subject.email);
        await this.typeText(this.subjectBox,subject.subject);
        await this.typeText(this.messageBox,subject.message);
        await this.uploadFile(this.fileSelectBox,subject.filePath);
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }

    async verifySuccessMessageVisible(text: string){
        await this.assertElementContainsText(this.successMessage,text);
    }

    async clickReturnHomeButton(){
        await this.clickElement(this.returnHomeButton)
    }


}