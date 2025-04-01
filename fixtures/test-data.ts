import { User } from '../models/user';
import { Subject } from '../models/subject';
import { faker } from '@faker-js/faker';

export class TestData {
  /**
   * Get valid user credentials
   */
  static getValidUser(): User {
    return {
      password: 'test123.',
      email: 'test123.@test.com',
      firstName: 'validName',
      lastName: 'User',
      phone: '9999999999',
      address: 'validAddress',
      city: 'validCity',
      state: 'validState',
      zipcode: '121212',
      country: 'Canada',
      day: '2',
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
      email: 'test@test.com',
      firstName: 'test',
      lastName: 'User',
      phone: '131212',
      address: 'invalidAddress',
      city: 'invalidCity',
      state: 'invalidState',
      zipcode: '121212',
      country: 'Canada',
      day: '2',
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
      country: 'Canada',
      day: "2",
      month: "September",
      year: "1996"
    };
  }

  /**
   * Generate random subject
   */
  static getContactMessage(): Subject {
  
    return {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      subject: faker.lorem.lines(),
      message: faker.lorem.paragraph(),
      filePath : "test-file/test-photo.jpeg"
    };
  }
}