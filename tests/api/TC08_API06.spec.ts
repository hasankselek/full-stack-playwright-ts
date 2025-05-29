import { test, expect, APIResponse } from '@playwright/test';

test('API 6: POST To Search Product without search_product parameter', async ({ request }) => {

    let response: APIResponse;
    let responseBody: any;

    await test.step('Send POST /api/searchProduct request', async () => {
        response = await request.post(`/api/searchProduct`);
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Verify responseCode is 400', async () => {
        expect(responseBody).toHaveProperty('responseCode', 400);
    });

    await test.step('Verify message is "Bad request, search_product parameter is missing in POST request."', async () => {
        expect(responseBody).toHaveProperty('message', 'Bad request, search_product parameter is missing in POST request.');
    });
});