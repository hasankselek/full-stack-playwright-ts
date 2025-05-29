import { test, expect } from '@playwright/test';
import { ConfigReader } from '@/utils/configReader';

test('API 4: DELETE Account by email', async ({ request }) => {
    let response: any;
    let responseBody: any;

    await test.step('Send DELETE /api/deleteAccount request', async () => {
        response = await request.delete('/api/deleteAccount', {
            form: {
                email: ConfigReader.get('sharedEmail'),
                password: 'Test123456',
            },
        });
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Validate responseCode is 200', async () => {
        expect(responseBody).toHaveProperty('responseCode', 200);
    });

    await test.step('Validate message for "Account deleted!"', async () => {
        expect(responseBody).toHaveProperty('message', 'Account deleted!');
    });
});