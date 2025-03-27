import { Page } from '@playwright/test';
import { logger } from './logger';

/**
 * Generate random string
 */
export function generateRandomString(length: number = 8): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate random email
 */
export function generateRandomEmail(): string {
  return `test_${generateRandomString(8)}@example.com`;
}

/**
 * Wait for navigation to complete
 */
export async function waitForNavigation(page: Page): Promise<void> {
  logger.info('Waiting for navigation to complete');
  await page.waitForLoadState('networkidle');
}

/**
 * Parse JSON from text
 */
export function parseJSON<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T;
  } catch (error) {
    logger.error(`Failed to parse JSON: ${error}`);
    return null;
  }
}