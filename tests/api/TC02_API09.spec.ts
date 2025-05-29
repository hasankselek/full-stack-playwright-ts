import {test,expect} from '@playwright/test';

test('API 9: DELETE To Verify Login',async ({request}) => {

    const baseURL = 'https://automationexercise.com/api'; 

    const response = await request.delete(`${baseURL}/verifyLogin`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    //message
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('This request method is not supported.');

    //responseCode
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(405);

    
    console.log('Yanıt:', responseBody);
  
});