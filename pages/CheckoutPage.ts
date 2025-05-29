import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '@/models/user';
import { Subject } from '@/models/subject';

export class CheckoutPage extends BasePage{

    readonly deliveryFullName: Locator;
    readonly deliveryAddress: Locator;
    readonly deliveryPhone: Locator;
    readonly descriptionArea: Locator;
    readonly placeOrderButton: Locator;
    private readonly billingAddress: Locator;

    constructor(page:Page) {
        super(page);
        this.deliveryFullName = page.locator("ul[id='address_delivery'] li[class='address_firstname address_lastname']")
        this.deliveryAddress = page.locator("ul[id='address_delivery'] li:nth-child(4)")
        this.deliveryPhone = page.locator("ul[id='address_delivery'] li[class='address_phone']")
        this.descriptionArea  = page.locator("//textarea[@name='message']")
        this.placeOrderButton = page.locator("//a[normalize-space()='Place Order']")
        this.billingAddress = page.locator("ul[id='address_invoice'] li:nth-child(4)");
    }

    async verifyDeliveryInfortmation(user: User) {
        let actualDeliveryFullName = await this.deliveryFullName.innerText();
        let expectedDeliveryFullName = "Mr. " + user.firstName + " " + user.lastName;
        await expect(actualDeliveryFullName.trim()).toBe(expectedDeliveryFullName);
    
        let actualDeliveryAddress = await this.deliveryAddress.innerText();
        let expectedDeliveryAddress = user.address;
        await expect(actualDeliveryAddress.trim()).toBe(expectedDeliveryAddress);
    
        let actualDeliveryPhone = await this.deliveryPhone.innerText();
        let expectedDeliveryPhone = user.phone;
        await expect(actualDeliveryPhone.trim()).toBe(expectedDeliveryPhone);
    }


    async fillDescription(subject:Subject){
        await this.typeText(this.descriptionArea,subject.message)
    }

    async clickPlaceOrder(){
        this.clickElement(this.placeOrderButton)
    }

    async verifyDeliveryAddress(user: User) {
        await this.deliveryAddress.isVisible();
        expect(this.deliveryAddress).toHaveText(user.address);
    }

     async verifyBillingAddress(user: User) {
        await this.billingAddress.isVisible();
        expect(this.billingAddress).toHaveText(user.address);
    }


}