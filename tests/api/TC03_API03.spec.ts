import {test,expect} from '@playwright/test';


test('API 3: Get All Brands List',  async ({request}) => {

    const baseURL = 'https://automationexercise.com/api'; 

    const response = await request.get(`${baseURL}/brandsList`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();

    // Temel kontroller
    expect(responseBody).toHaveProperty('brands');
    expect(Array.isArray(responseBody.brands)).toBeTruthy();
    expect(responseBody.brands.length).toBeGreaterThan(0);
    expect(responseBody.responseCode).toBe(200);

    console.log('All brands list:', responseBody);
});