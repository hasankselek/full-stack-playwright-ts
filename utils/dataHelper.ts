import fs from 'fs';
import path from 'path';

export class DataHelper {
  /**
   * Loads test data from a JSON file
   * @param filename The name of the file in the fixtures directory
   * @returns The parsed JSON data
   */
  static loadTestData<T>(filename: string): T {
    const filePath = path.resolve('fixtures', filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent) as T;
  }

  /**
   * Generates a random email
   * @returns A random email address
   */
  static generateRandomEmail(): string {
    return `test${Math.floor(Math.random() * 10000)}@example.com`;
  }

  /**
   * Generates a random string of specified length
   * @param length The length of the string to generate
   * @returns A random string
   */
  static generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
} 