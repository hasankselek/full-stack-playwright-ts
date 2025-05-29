import{test,expect} from '@playwright/test';

test('API 8: POST To Verify Login without email parameter', async ({request}) => {

    const response = await request.post(`/api/verifyLogin`, {
        form: {
            password: 'invalid123'
        }
    });

    // HTTP durum kodunu kontrol et
    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(400);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');


});