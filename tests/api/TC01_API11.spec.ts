import { test, expect, APIResponse } from '@playwright/test';
import { TestData } from '@/fixtures/test-data';
import { ConfigReader } from '@/utils/configReader';

test('API 11: POST To Create/Register User Account', async ({ request }) => {
  let randomEmail: string;
  let responseBody: any;
  let response: APIResponse;

  randomEmail = TestData.getRandomEmail();
  ConfigReader.set('sharedEmail', randomEmail);

  await test.step('Send POST /api/createAccount and validate status', async () => {
    response = await request.post('/api/createAccount', {
      form: {
        name: 'Test User',
        email: randomEmail,
        password: 'Test123456',
        title: 'Mr',
        birth_date: '10',
        birth_month: '5',
        birth_year: '1990',
        firstname: 'Test',
        lastname: 'User',
        company: 'Test Company',
        address1: 'Test Address Line 1',
        address2: 'Test Address Line 2',
        country: 'Turkey',
        zipcode: '34000',
        state: 'Istanbul',
        city: 'Istanbul',
        mobile_number: '5550001122',
      },
    });
    expect(response.status()).toBe(200);
    responseBody = await response.json();
  });

  // Dönen yanıtın içeriğini doğrular
  await test.step('Validate response payload', async () => {
    expect(responseBody).toHaveProperty('message', 'User created!');
    expect(responseBody).toHaveProperty('responseCode', 201);
  });
});