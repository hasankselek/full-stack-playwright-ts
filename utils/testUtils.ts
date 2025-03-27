import { Page, Browser, BrowserContext } from '@playwright/test';

/**
 * Takes a screenshot and returns the path
 * @param page Playwright page
 * @param name Name for the screenshot
 * @returns Path to the screenshot
 */
export const takeScreenshot = async (page: Page, name: string): Promise<string> => {
  const path = `./screenshots/${name}-${Date.now()}.png`;
  await page.screenshot({ path, fullPage: true });
  return path;
};

/**
 * Waits for a specified time
 * @param ms Time to wait in milliseconds
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Retries a function until it succeeds or times out
 * @param fn Function to retry
 * @param options Retry options
 * @returns Result of the function
 */
export const retry = async <T>(
  fn: () => Promise<T>, 
  options: { 
    retries: number; 
    delay: number; 
    onRetry?: (attempt: number, error: Error) => void 
  }
): Promise<T> => {
  const { retries, delay, onRetry } = options;
  
  let lastError: Error;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (onRetry) {
        onRetry(attempt, lastError);
      }
      if (attempt < retries) {
        await wait(delay);
      }
    }
  }
  
  throw lastError!;
};

/**
 * Creates a new incognito browser context
 * @param browser Playwright browser
 * @returns Browser context
 */
export const createIncognitoContext = async (browser: Browser): Promise<BrowserContext> => {
  return await browser.newContext();
};

/**
 * Clears browser storage (cookies, localStorage, etc.)
 * @param page Playwright page
 */
export const clearBrowserStorage = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(';').forEach(cookie => {
      const [name] = cookie.trim().split('=');
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  });
}; 