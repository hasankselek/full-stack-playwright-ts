import{test,expect} from '@playwright/test';

test('API 10: POST To Verify Login with invalid details', async ({request}) => {

    const response = await request.post(`/api/verifyLogin`, {
        form: {
            email: 'testtestest123@gmail.com',
            password: 'testtestestest123 '
        }
    });

    // HTTP durum kodunu kontrol et
    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(404);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('User not found!');


});