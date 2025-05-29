import { test, expect, APIResponse } from '@playwright/test';

test('API 9: DELETE To Verify Login', async ({ request }) => {

  let responseBody: any;
  let response: APIResponse;

  await test.step('Send DELETE request to /api/verifyLogin and validate response', async () => {
    response = await request.delete(`/api/verifyLogin`)
    expect(response.status()).toBe(200);
    responseBody = await response.json();
  });

  await test.step('Validate response payload', async () => {
    expect(responseBody).toHaveProperty('message', 'This request method is not supported.');
    expect(responseBody).toHaveProperty('responseCode', 405);
  });

});