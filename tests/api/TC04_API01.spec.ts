import { test, expect, APIResponse } from '@playwright/test';

test('API 1: Get All Products List', async ({ request }) => {
  let responseBody: any;
  let response: APIResponse;

  await test.step('Send GET /api/productsList request', async () => {
    response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);
    responseBody = await response.json();
  });

  await test.step('Validate responseCode is 200', async () => {
    expect(responseBody).toHaveProperty('responseCode', 200);
  });

  await test.step('Validate response structure and content', async () => {
    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBeTruthy();
    expect(responseBody.products.length).toBeGreaterThan(0);

    const firstProduct = responseBody.products[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('category');
  });

  await test.step('Validate response headers', async () => {
    expect(response.headers()['date']).toBeTruthy();
  });
});