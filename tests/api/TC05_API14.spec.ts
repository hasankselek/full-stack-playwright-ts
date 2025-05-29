import { ConfigReader } from '@/utils/configReader';
import { test, expect, APIResponse } from '@playwright/test';

test('API 14: GET user account detail by email', async ({ request }) => {
  let response: APIResponse;
  let responseBody: any;
  
  await test.step('Send GET /api/getUserDetailByEmail request', async () => {
    const email = ConfigReader.get('sharedEmail');
    response = await request.get('/api/getUserDetailByEmail', {
      params: { email },
    });
    expect(response.status()).toBe(200);
    responseBody = await response.json();
  });

  await test.step('Validate responseCode is 200', async () => {
    expect(responseBody).toHaveProperty('responseCode',200);
  });
});