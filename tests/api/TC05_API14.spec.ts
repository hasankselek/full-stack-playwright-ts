import{test,expect} from '@playwright/test';

test('API 14: GET user account detail by email', async ({request}) => {

    const baseURL = 'https://automationexercise.com/api'; 

    const formData = {
        email : 'test@test.com'
    }

    const response = await request.get(`${baseURL}/getUserDetailByEmail`, {
        params: formData
    });

    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(200);



});