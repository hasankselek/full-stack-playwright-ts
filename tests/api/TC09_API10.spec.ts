import { test, expect, APIResponse } from '@playwright/test';

test('API 10: POST To Verify Login with invalid details', async ({ request }) => {

    let response: APIResponse;
    let responseBody: any;

    await test.step('Send POST /api/verifyLogin request', async () => {
        response = await request.post(`/api/verifyLogin`, {
            form: {
                email: 'testtestest123@gmail.com',
                password: 'testtestestest123 '
            }
        });
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Verify responseCode is 404', async () => {
        expect(responseBody).toHaveProperty('responseCode', 404);
    });

    await test.step('Verify message is "User not found!"', async () => {
        expect(responseBody).toHaveProperty('message', 'User not found!');
    });
});