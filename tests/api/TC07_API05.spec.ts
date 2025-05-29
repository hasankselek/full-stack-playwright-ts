import { test, expect, APIResponse } from '@playwright/test';

test('API 5: POST To Search Product', async ({ request }) => {
    let response: APIResponse;
    let responseBody: any;

    await test.step('Send POST /api/searchProduct request', async () => {
        response = await request.post('/api/searchProduct', {
            form: { search_product: 'jean' },
        });
        expect(response.status()).toBe(200);
        responseBody = await response.json();
    });

    await test.step('Validate responseCode is 200', async () => {
        expect(responseBody).toHaveProperty('responseCode', 200);
    });

    await test.step('Validate products array and first product', async () => {
        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBeTruthy();
        expect(responseBody.products.length).toBeGreaterThan(0);
        expect(responseBody.products[0]).toHaveProperty('id');
        expect(responseBody.products[0]).toHaveProperty('name');
        expect(responseBody.products[0].name.toLowerCase()).toContain('jean');
    });
});