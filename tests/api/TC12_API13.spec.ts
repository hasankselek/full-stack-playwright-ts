import { ConfigReader } from '@/utils/configReader';
import{test,expect} from '@playwright/test';

test('API 13: PUT METHOD To Update User Account', async ({request}) => {

    const randomEmail = ConfigReader.get('sharedEmail');

    const response = await request.put(`/api/updateAccount`, {
        form : {
        name: 'Test User',
        email: randomEmail,
        password: 'Test123456',
        title: 'Mrs',
        birth_date: '02',
        birth_month: '09',
        birth_year: '1996',
        firstname: 'TestPerson',
        lastname: 'UserTest',
        company: 'TestCompanyyy',
        address1: 'Test Address 1',
        address2: 'Test Address 2',
        country: 'Germany',
        zipcode: '12345',
        state: 'Berlin',
        city: 'Berlin',
        mobile_number: '1234567890'}
    });

    // HTTP durum kodunu kontrol et
    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(200);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('User updated!');


});