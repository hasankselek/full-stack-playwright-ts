import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TestCasePage extends BasePage{


    constructor(page : Page){
        super(page);
    }

}