import{test,expect} from '@playwright/test';

test('API 5: POST To Search Product', async ({request}) => {

    const baseURL = 'https://automationexercise.com/api'; 

    const response = await request.post(`${baseURL}/searchProduct`, {
        form: {search_product : 'jean'}
    });

    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(200);

    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBeTruthy();
    expect(responseBody.products.length).toBeGreaterThan(0);
    expect(responseBody.products[0]).toHaveProperty('id');
    expect(responseBody.products[0]).toHaveProperty('name');
    expect(responseBody.products[0].name.toLowerCase()).toContain('jean');
    console.log('Search results for "jean":', responseBody.products);


});