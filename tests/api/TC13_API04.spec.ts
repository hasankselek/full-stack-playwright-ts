import { test, expect } from '@playwright/test';

test('API 4: PUT To All Brands List', async ({ request }) => {
    let response: any;
    let responseBody: any;

    await test.step('Send PUT /api/brandsList request', async () => {
        response = await request.put('/api/brandsList');
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