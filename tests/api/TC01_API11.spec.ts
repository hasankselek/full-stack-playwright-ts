import { test,expect } from '@playwright/test';
import { TestData } from '@/fixtures/test-data';
import { ConfigReader } from '@/utils/configReader';

test('API 11: POST To Create/Register User Account', async ({ request }) => {

    const randomEmail = TestData.getRandomEmail(); 
     ConfigReader.set('sharedEmail', randomEmail); // Paylaşılan e-posta adresini ayarla
    console.log('Oluşturulan rastgele e-posta:', randomEmail);
    
    // API isteği gönder
    const response = await request.post(`/api/createAccount`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        form : {
        name: 'Test User',
        email: randomEmail,
        password: 'Test123456',
        title: 'Mr',
        birth_date: '10',
        birth_month: '5',
        birth_year: '1990',
        firstname: 'Test',
        lastname: 'User',
        company: 'Test Company',
        address1: 'Test Address Line 1',
        address2: 'Test Address Line 2',
        country: 'Turkey',
        zipcode: '34000',
        state: 'Istanbul',
        city: 'Istanbul',
        mobile_number: '5550001122'}
      });

    expect(response.status()).toBe(200);
        
    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('User created!');

    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(201);
    
    console.log('Yanıt:', responseBody);
    
});