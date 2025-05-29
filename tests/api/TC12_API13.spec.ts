import { test, expect } from '@playwright/test';
import { ConfigReader } from '@/utils/configReader';

test('API 13: PUT METHOD To Update User Account', async ({ request }) => {
    let response: any;
    let responseBody: any;
    const randomEmail = ConfigReader.get('sharedEmail');

    await test.step('Send PUT /api/updateAccount request', async () => {
        response = await request.put('/api/updateAccount', {
            form: {
                name: 'Test User',
                email: randomEmail,
                password: 'Test123456',
                title: 'Mrs',
                birth_date: '02',
                birth_month: '09',
                birth_year: '1996',
                firstname: 'TestPerson',
                lastname: 'UserTest',
                company: 'TestCompanyyy',
                address1: 'Test Address 1',
                address2: 'Test Address 2',
                country: 'Germany',
                zipcode: '12345',
                state: 'Berlin',
                city: 'Berlin',
                mobile_number: '1234567890'
            }
        });
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Verify responseCode is 200', async () => {
        expect(responseBody).toHaveProperty('responseCode', 200);
    });

    await test.step('Verify message is "User updated!"', async () => {
        expect(responseBody).toHaveProperty('message', 'User updated!');
    });
});