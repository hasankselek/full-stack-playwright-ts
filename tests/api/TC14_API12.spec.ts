import { TestData } from '@/fixtures/test-data';
import { ConfigReader } from '@/utils/configReader';
import{test,expect} from '@playwright/test';

test('API 4: PUT To All Brands List', async ({request}) => {

    const response = await request.delete(`/api//deleteAccount`, {
        form: {
            email: ConfigReader.get('sharedEmail'),
            password: 'Test123456',
        }
    });

    // HTTP durum kodunu kontrol et
    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();

    // Response mesajını kontrol et
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(200);

    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('Account deleted!');


});