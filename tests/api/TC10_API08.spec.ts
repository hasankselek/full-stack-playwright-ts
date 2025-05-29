import { test, expect, APIResponse } from '@playwright/test';

test('API 8: POST To Verify Login without email parameter', async ({ request }) => {

    let response: APIResponse;
    let responseBody: any;

    await test.step('Send POST /api/verifyLogin request', async () => {
        response = await request.post(`/api/verifyLogin`, {
            form: {
                password: 'invalid123'
            }
        });
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Verify responseCode is 400', async () => {
        expect(responseBody).toHaveProperty('responseCode', 400);
    });

    await test.step('Verify message is "Bad request, email or password parameter is missing in POST request."', async () => {
        expect(responseBody).toHaveProperty('message', 'Bad request, email or password parameter is missing in POST request.');
    });
});