import { test, expect, APIResponse } from '@playwright/test';

test('API 2: POST To All Products List', async ({ request }) => {
    let response: APIResponse;
    let responseBody: any;

    await test.step('Send POST /api/productsList request', async () => {
        response = await request.post('/api/productsList');
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Validate responseCode is 405', async () => {
        expect(responseBody).toHaveProperty('responseCode', 405);
    });

    await test.step('Validate message for unsupported method', async () => {
        expect(responseBody).toHaveProperty('message', 'This request method is not supported.');
    });
});