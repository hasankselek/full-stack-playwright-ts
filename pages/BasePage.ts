import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../utils/logger';
import { TestData } from '@/fixtures/test-data';

export class BasePage {
  constructor(protected page: Page) {}


  /**
   * Navigate to a specific URL
   */
  async navigate(url: string): Promise<void> {
    logger.info(`Navigating to: ${url}`);
    await this.page.goto(url);
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(locator: Locator, timeout: number = 5000): Promise<void> {
    logger.info(`Waiting for element to be visible: ${locator}`);
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Click on an element with retry logic
   */
  async clickElement(locator: Locator, options = { timeout: 5000 }): Promise<void> {
    logger.info(`Clicking element: ${locator}`);
    try {
      await locator.click({ timeout: options.timeout });
    } catch (error) {
      logger.error(`Failed to click element: ${error}`);
      // Retry with force click
      logger.info('Retrying with force click');
      await locator.click({ force: true, timeout: options.timeout });
    }
  }

  /**
   * Type text into an input field
   */
  async typeText(locator: Locator, text: string): Promise<void> {
    logger.info(`Typing text: ${text}`);
    await locator.fill(text);
  }

  /**
   * Get text from an element
   */
  async getText(locator: Locator): Promise<string> {
    await this.waitForElement(locator);
    return await locator.innerText();
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(name: string): Promise<void> {
    logger.info(`Taking screenshot: ${name}`);
    await this.page.screenshot({ path: `./screenshots/${name}.png` });
  }

  /**
   * Assert element contains text
   */
  async assertElementContainsText(locator: Locator, text: string): Promise<void> {
    logger.info(`Asserting element contains text: ${text}`);
    await expect(locator).toContainText(text);
  }

  async clickWithText(text: string): Promise<void> {
    const element = this.page.locator(`text=${text}`);
    await element.click();
  }

  async verifyTextVisible(text: string): Promise<void> {
    const element = this.page.locator(`text=${text}`);
    await expect(element).toBeVisible();
  }

  async verifyNavigateExpectedPage(expectedUrl : string):Promise<void> {
    const expectedHomePageUrl = expectedUrl;
    const actualHomePageUrl = await this.page.url();
    await expect(actualHomePageUrl).toBe(expectedHomePageUrl);
  }

  async verifyNavigateContainExpectedPage(expectedUrl : string):Promise<void> {
    const expectedHomePageUrl = expectedUrl;
    const actualHomePageUrl = await this.page.url();
    await expect(actualHomePageUrl).toContain(expectedHomePageUrl);
  }

  async uploadFile(locator: Locator, file: string) {
    await locator.setInputFiles(file);
  }

  async scroolDownFooter(){
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async smoothScrollToLocator(locator: Locator) {
    await locator.evaluate((element) => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  
    await this.page.waitForTimeout(500);
  }

  async blockCommonAds() {
    // Yaygın reklam isteklerini iptal et
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('adservice') ||
        url.includes('facebook.com/ads')
      ) {
        console.log('Reklam engellendi:', url);
        route.abort();
      } else {
        route.continue();
      }
    });
  
    // Yeni sekmede açılan reklamları kapat
    this.page.context().on('page', async (popup) => {
      console.log('Açılan pop-up kapatılıyor:', popup.url());
      await popup.close();
    });
  }
} 