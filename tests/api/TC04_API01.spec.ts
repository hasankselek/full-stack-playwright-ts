import { test, expect } from '@playwright/test';

test('API 1: Get All Products List', async ({ request }) => {
    const baseURL = 'https://automationexercise.com/api'; // Replace with your API base URL

    const response = await request.get(`${baseURL}/productsList`);
    expect(response.status()).toBe(200);

    // Response body'sini al
    const responseBody = await response.json();
    
    // Temel kontroller
    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBeTruthy();
    
    // Ürün listesinin boş olmadığını kontrol et
    expect(responseBody.products.length).toBeGreaterThan(0);
    
    // İlk ürünün temel özelliklerini kontrol et
    if (responseBody.products.length > 0) {
      const firstProduct = responseBody.products[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('name');
      expect(firstProduct).toHaveProperty('price');
      expect(firstProduct).toHaveProperty('category');
      
      // Log - Testi geçerken ürün bilgilerini görmek isterseniz
      console.log('İlk ürün:', firstProduct);
    }
    
    // Response süresi kontrolü (opsiyonel)
    // API yanıt süresinin 2 saniyeden az olmasını bekleyelim
    expect(response.headers()['date']).toBeTruthy();
  });
