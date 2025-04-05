import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";
import { T } from '@faker-js/faker/dist/airline-CBNP41sR';

export class CategoryProductsPage extends BasePage{

    readonly categoryPageTitle: Locator; 
  

    constructor(page:Page){
        super(page);
        this.categoryPageTitle = page.locator(".title.text-center")
    }

    async verifyCategoryTitleVisible(title:string){
        this.assertElementContainsText(this.categoryPageTitle,title)
    }

    
    
}