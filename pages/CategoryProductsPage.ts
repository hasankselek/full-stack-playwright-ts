import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class CategoryProductsPage extends BasePage{

    private readonly categoryPageTitle: Locator; 
  

    constructor(page:Page){
        super(page);
        this.categoryPageTitle = page.locator(".title.text-center")
    }

    async verifyCategoryTitleVisible(title:string){
        this.assertElementContainsText(this.categoryPageTitle,title)
    }

    
    
}