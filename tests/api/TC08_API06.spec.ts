import{test,expect} from '@playwright/test';

test('API 6: POST To Search Product without search_product parameter', async ({request}) => {

    const response = await request.post(`/api/searchProduct`);

    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(400);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('Bad request, search_product parameter is missing in POST request.');


});