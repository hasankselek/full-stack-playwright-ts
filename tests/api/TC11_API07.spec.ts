import { test, expect } from '@playwright/test';
import { ConfigReader } from '@/utils/configReader';

test('API 7: Verify Login with Valid Credentials', async ({ request }) => {
    let response: any;
    let responseBody: any;
    const email = ConfigReader.get('sharedEmail');

    await test.step('Send POST /api/verifyLogin request', async () => {
        response = await request.post('/api/verifyLogin', {
            form: {
                email,
                password: 'Test123456',
            },
        });
        responseBody = await response.json();
        expect(response.status()).toBe(200);
    });

    await test.step('Verify responseCode is 200', async () => {
        expect(responseBody).toHaveProperty('responseCode', 200);
    });

    await test.step('Verify message is "User exists!"', async () => {
        expect(responseBody).toHaveProperty('message', 'User exists!');
    });
});