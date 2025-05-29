import { test, expect, APIResponse } from '@playwright/test';

test('API 3: Get All Brands List', async ({ request }) => {
  let responseBody: any;
  let response: APIResponse;

  await test.step('Send GET /brandsList request', async () => {
    response = await request.get(`/api/brandsList`);
    expect(response.status()).toBe(200);
    responseBody = await response.json();
  });

  await test.step('Validate response structure', async () => {
    expect(responseBody).toHaveProperty('brands');
    expect(Array.isArray(responseBody.brands)).toBeTruthy();
    expect(responseBody.brands.length).toBeGreaterThan(0);
  });

  await test.step('Validate responseCode is 200', async () => {
    expect(responseBody).toHaveProperty('responseCode', 200);
  });

});