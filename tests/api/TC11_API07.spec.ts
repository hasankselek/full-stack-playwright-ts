import { TestData } from '@/fixtures/test-data';
import { ConfigReader } from '@/utils/configReader';
import{test,expect} from '@playwright/test';

test('API 7: Verify Login with Valid Credentials', async ({request}) => {

    const email = ConfigReader.get('sharedEmail');

    const response = await request.post(`/api/verifyLogin`, {
        form: {
            email: email,
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
    expect(responseBody.message).toBe('User exists!');


});