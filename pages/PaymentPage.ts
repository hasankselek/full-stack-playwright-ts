import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CreditCard } from '@/models/creditCard';
import path from 'path';
import fs from 'fs/promises';


export class PaymentPage extends BasePage {

    readonly nameOnCardBox: Locator;
    readonly cardNumberBox: Locator;
    readonly cvcBox: Locator;
    readonly expirationMonth: Locator;
    readonly expirationYear: Locator;
    readonly payAndConfirmOrderButton: Locator;
    readonly paymentSuccessfullyText: Locator;
    private readonly downloadInvoiceButton: Locator;


    constructor(page: Page) {
        super(page);
        this.nameOnCardBox = page.locator("input[name='name_on_card']")
        this.cardNumberBox = page.locator("input[name='card_number']")
        this.cvcBox = page.locator("input[placeholder='ex. 311']")
        this.expirationMonth = page.getByPlaceholder("MM")
        this.expirationYear = page.getByPlaceholder("YYYY")
        this.payAndConfirmOrderButton = page.locator("#submit")
        this.paymentSuccessfullyText = page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']")
        this.downloadInvoiceButton = page.locator("//a[normalize-space()='Download Invoice']")
    }


    async fillCreditCardInformation(creditCard: CreditCard) {
        await this.typeText(this.nameOnCardBox, creditCard.fullName)
        await this.typeText(this.cardNumberBox, creditCard.cardNumber)
        await this.typeText(this.cvcBox, creditCard.cvc)
        await this.typeText(this.expirationMonth, creditCard.expirationMonth)
        await this.typeText(this.expirationYear, creditCard.expirationYear)
    }

    async clickPayAndConfirmOrderButton() {
        await this.clickElement(this.payAndConfirmOrderButton)
    }

    async verifyPaymentSuccesfullyMessage() {
        await this.assertElementContainsText(this.paymentSuccessfullyText, "Congratulations! Your order has been confirmed!")
    }


    async verifyBillText(user: { firstName: string; lastName: string }) {
        // İndirilenler dizini oluştur (test klasöründe)
        const downloadPath = path.join(__dirname, 'İndirilenler');
        await fs.mkdir(downloadPath, { recursive: true });

        // İndirme olayını dinle (mevcut sayfa üzerinden)
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadInvoiceButton.click(),
        ]);

        // Dosyayı dosya sistemine kaydet
        const filePath = path.join(downloadPath, await download.suggestedFilename());
        await download.saveAs(filePath);

        // Dosya içeriğini oku
        const content = await fs.readFile(filePath, 'utf-8');

        // İçeriği kontrol et
        expect(content).toContain('Hi ' + user.firstName + " " + user.lastName + ', Your total purchase amount is 500. Thank you');
    }





}