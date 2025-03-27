import { User } from '../models/user';
import { faker } from '@faker-js/faker';

export class TestData {
  /**
   * Get valid user credentials
   */
  static getValidUser(): User {
    return {
      password: 'Password123!',
      email: 'testuser@example.com',
      firstName: 'Test',
      lastName: 'User',
      phone: '9999999999',
      address: 'validAddress',
      city: 'validCity',
      state: 'validState',
      zipcode: '121212',
      country: 'Canada',
      day: '02',
      month: 'September',
      year: '1996'
    };
  }

  /**
   * Get invalid user credentials
   */
  static getInvalidUser(): User {
    return {
      password: 'wrongpassword',
      email: 'invalid@example.com',
      firstName: 'Invalid',
      lastName: 'User',
      phone: '131212',
      address: 'invalidAddress',
      city: 'invalidCity',
      state: 'invalidState',
      zipcode: '121212',
      country: 'Canada',
      day: '02',
      month: 'September',
      year: '1996'
    };
  }

  /**
   * Generate random user
   */
  static generateRandomUser(): User {
  
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipcode: faker.location.zipCode(),
      country: faker.location.country(),
      day: '02',
      month: 'September',
      year: '1996'
    };
  }
}