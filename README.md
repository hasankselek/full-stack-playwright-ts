# Automation Exercise - Playwright TypeScript Test Automation Project

Bu proje, [Automation Exercise](http://automationexercise.com) web sitesi için Playwright ve TypeScript kullanılarak geliştirilmiş bir UI test otomasyon çerçevesidir.

## ✨ Özellikler

*   **Playwright**: Modern, hızlı ve güvenilir tarayıcı otomasyonu.
*   **TypeScript**: Statik tipleme ile daha sağlam ve okunabilir kod.
*   **Page Object Model (POM)**: Test bakımını basitleştiren ve yeniden kullanılabilirliği artıran tasarım deseni.
*   **Özel Fixture'lar**: Testler için özel kurulum ve temizleme işlemlerinin yönetimi.
*   **Faker.js**: Test verisi oluşturmak için kullanılan kütüphane.
*   **Çoklu Tarayıcı Testi**: Chromium, Firefox ve WebKit üzerinde test çalıştırma desteği.
*   **HTML Raporlama**: Test sonuçları için ayrıntılı HTML raporları.
*   **Allure Raporlama**: Gelişmiş, etkileşimli test raporları ile ekler ve adım ayrıntıları.

## 📋 Ön Koşullar

*   [Node.js](https://nodejs.org/) (v18 veya üzeri önerilir)
*   [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

## 🚀 Kurulum

1.  **Projeyi Klonlayın:**
    ```bash
    git clone <repository-url> # <repository-url> yerine kendi repository adresinizi yazın
    cd automationexercise-playwright-ts
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
    veya
    ```bash
    yarn install
    ```

3.  **Playwright Tarayıcılarını Yükleyin:**
    ```bash
    npx playwright install
    ```

## 📂 Proje Yapısı

```
.
├── config/             # Test yapılandırma dosyaları
│   └── testConfig.ts
├── fixtures/         # Test verileri ve özel fixture'lar
│   ├── customFixtures.ts
│   └── test-data.ts
├── models/           # Veri modelleri (TypeScript arayüzleri)
│   ├── creditCard.ts
│   ├── subject.ts
│   └── user.ts
├── node_modules/     # Proje bağımlılıkları
├── pages/            # Page Object Model sınıfları
│   ├── BasePage.ts
│   └── ... (diğer sayfa nesneleri)
├── playwright-report/ # Playwright HTML raporlarının kaydedildiği dizin
├── allure-results/   # Allure ham sonuçları (test çalıştırıldıktan sonra oluşturulur)
├── test-file/        # Testlerde kullanılan dosyalar (örneğin, dosya yüklemeleri için)
├── test-results/     # Ham test sonuçları ve izleme dosyaları
├── tests/            # Test senaryoları (spec dosyaları)
│   └── ui/           # UI testleri
│       └── TC01.spec.ts
│       └── ...
├── utils/            # Yardımcı fonksiyonlar ve konfigürasyonlar
│   ├── apiHelper.ts  # API test yardımcı fonksiyonları
│   ├── dataHelper.ts # Test verisi yardımcı fonksiyonları
│   ├── helpers.ts    # Genel yardımcı fonksiyonlar
│   ├── logger.ts     # Loglama mekanizması
│   └── testUtils.ts  # Test yardımcı fonksiyonları
├── .gitignore        # Git tarafından yok sayılan dosyalar
├── package.json      # Proje bağımlılıkları ve script'leri
├── package-lock.json # Bağımlılıkların sabitlenmiş versiyonları
├── playwright.config.ts # Playwright konfigürasyon dosyası
├── tsconfig.json     # TypeScript derleyici seçenekleri
└── README.md         # Bu dosya
```

## ▶️ Testleri Çalıştırma

Testleri çalıştırmak için `package.json` dosyanızın `scripts` bölümüne komutlar ekleyebilir veya doğrudan `npx playwright` komutlarını kullanabilirsiniz:

*   **Tüm Testleri Çalıştır (Başsız Mod):**
    ```bash
    npx playwright test
    ```

*   **Tüm Testleri Çalıştır (Tarayıcı Görünür Mod):**
    ```bash
    npx playwright test --headed
    ```

*   **Belirli Bir Tarayıcıda Çalıştır:**
    ```bash
    # playwright.config.ts dosyasında tanımlanan proje adlarını kullanın
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    npx playwright test --project="Mobile Chrome"
    npx playwright test --project="Mobile Safari"
    ```

*   **Belirli Bir Test Dosyasını Çalıştır:**
    ```bash
    npx playwright test tests/ui/TC01.spec.ts
    ```

*   **Belirli Bir Testi Çalıştır (Test Adına Göre):**
    ```bash
    # Örnek: TC01.spec.ts içindeki 'Register User' testini çalıştır
    npx playwright test -g "Register User"
    ```

## 📊 Test Raporları

Testler yürütüldükten sonra, `playwright-report` dizininde ayrıntılı bir HTML raporu oluşturulur. Raporu görüntülemek için aşağıdaki komutu kullanabilirsiniz:

```bash
npx playwright show-report
```

Bu komut, raporu varsayılan tarayıcınızda açacaktır.

## 📊 Allure Raporları

Allure, gelişmiş, etkileşimli test raporları sağlar. Bu projeyi kullanmak için:

1. **Playwright testlerinizi çalıştırın (Allure sonuçları otomatik olarak oluşturulur):**
    ```bash
    npx playwright test
    ```
    Bu, ham sonuçları içeren bir `allure-results` dizini oluşturacaktır.

2. **Allure HTML raporunu oluşturun:**
    ```bash
    npx allure generate allure-results --clean -o allure-report
    ```

3. **Allure raporunu tarayıcınızda açın:**
    ```bash
    npx allure open allure-report
    ```

Allure raporu, etkileşimli grafikler, adımlar ve ekler ile varsayılan tarayıcınızda açılacaktır.

## ⚙️ Yapılandırma

Playwright yapılandırması `playwright.config.ts` dosyasında bulunur. Aşağıdaki gibi ayarları değiştirebilirsiniz:

*   `baseURL`: Test edilen uygulamanın temel URL'si (`http://automationexercise.com`).
*   `timeout`: Test adımları için varsayılan zaman aşımı (örneğin, `30000` ms).
*   `retries`: Başarısız testlerin bir CI ortamında kaç kez yeniden denenmesi gerektiği (`process.env.CI ? 2 : 0`).
*   `projects`: Farklı tarayıcılar ve cihazlar için yapılandırmalar (Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari).
*   `use`: Genel test ayarları (başsız mod, viewport boyutu, izleme ayarları vb.). `headless: false` ayarı, testleri tarayıcı arayüzü görünür şekilde çalıştırır.

## 🤝 Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir sorun açın veya bir çekme isteği gönderin.

##  lisans

Bu proje ISC Lisansı altında lisanslanmıştır. Ayrıntılar için `package.json` dosyasına bakın.