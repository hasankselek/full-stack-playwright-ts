import{test,expect} from '@playwright/test';

test('API 2: POST To All Products List', async ({request}) => {

    const baseURL = 'https://automationexercise.com/api'; 

   
    const response = await request.post(`${baseURL}/productsList`, {
    });

    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(405);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('This request method is not supported.');

});