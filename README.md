# Automation Exercise - Playwright TypeScript Test Automation Project

This project is a UI and API test automation framework developed using Playwright and TypeScript for the [Automation Exercise](http://automationexercise.com) website.

## ✨ Features

* **Playwright**: Modern, fast, and reliable browser automation.
* **TypeScript**: Static typing for more robust and readable code.
* **Page Object Model (POM)**: Simplifies test maintenance and increases reusability.
* **Custom Fixtures**: Manages setup and teardown for tests.
* **Faker.js**: Generates test data dynamically.
* **Multi-Browser Testing**: Supports Chromium, Firefox, and WebKit.
* **Allure Reporting**: Advanced, interactive test reports with attachments and step details.
* **HTML Reporting**: Detailed HTML reports for test results.
* **Environment Configuration**: Easily switch between environments (e.g., dev, staging, prod).
* **API Testing**: Includes API test cases with schema validation and response verification.

## 📋 Prerequisites

* [Node.js](https://nodejs.org/) (v18 or later recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Setup

1. **Clone the Repository:**
    ```bash
    git clone <repository-url> # Replace <repository-url> with your repository address
    cd automationexercise-playwright-ts
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Install Playwright Browsers:**
    ```bash
    npx playwright install
    ```

## 📂 Project Structure

```
.
├── config/             # Test configuration files
├── fixtures/           # Test data and custom fixtures
├── models/             # Data models (TypeScript interfaces)
├── pages/              # Page Object Model classes
├── playwright-report/  # Playwright HTML reports
├── allure-results/     # Allure raw results (generated after tests)
├── test-file/          # Files used in tests (e.g., uploads)
├── test-results/       # Raw test results and trace files
├── tests/              # Test cases (spec files)
│   ├── ui/             # UI tests
│   └── api/            # API tests
├── utils/              # Helper functions and utilities
├── .gitignore          # Files ignored by Git
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Locked versions of dependencies
├── playwright.config.ts # Playwright configuration file
├── tsconfig.json       # TypeScript compiler options
└── README.md           # This file
```

## ▶️ Running Tests

You can run tests using the `scripts` section in `package.json` or directly with `npx playwright` commands:

* **Run All Tests (Headless Mode):**
    ```bash
    npx playwright test
    ```

* **Run All Tests (Headed Mode):**
    ```bash
    npx playwright test --headed
    ```

* **Run Tests in a Specific Browser:**
    ```bash
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    ```

* **Run a Specific Test File:**
    ```bash
    npx playwright test tests/ui/TC01.spec.ts
    ```

* **Run a Specific Test by Name:**
    ```bash
    npx playwright test -g "Register User"
    ```

## 📊 Test Reports

### Playwright HTML Reports
After running tests, a detailed HTML report is generated in the `playwright-report` directory. To view the report:
```bash
npx playwright show-report
```

### Allure Reports
Allure provides advanced, interactive test reports. To use Allure:

1. **Run Tests (Allure results are automatically generated):**
    ```bash
    npx playwright test
    ```

2. **Generate Allure HTML Report:**
    ```bash
    npx allure generate allure-results --clean -o allure-report
    ```

3. **Open Allure Report in Browser:**
    ```bash
    npx allure open allure-report
    ```

## ⚙️ Configuration

Playwright configuration is located in `playwright.config.ts`. You can customize the following:

* **`baseURL`**: Base URL of the application under test (`http://automationexercise.com`).
* **`timeout`**: Default timeout for test steps (e.g., `30000` ms).
* **`retries`**: Number of retries for failed tests in CI environments (`process.env.CI ? 2 : 0`).
* **`projects`**: Configurations for different browsers and devices (Chromium, Firefox, WebKit).
* **`use`**: General test settings (headless mode, viewport size, tracing, etc.).

## 📜 Scripts

The following scripts are available in the `package.json` file to simplify common tasks:

* **Run UI Tests:**
    ```bash
    npm run test:ui
    ```
    Runs UI tests using the `chromium` project with Allure reporting enabled.

* **Run Allure Report for UI Tests:**
    ```bash
    npm run allure:ui
    ```
    Runs UI tests and generates an Allure report, then opens it in the browser.

* **Run API Tests:**
    ```bash
    npm run test:api
    ```
    Runs API tests using the `api-tests` project with Allure reporting enabled.

* **Run Allure Report for API Tests:**
    ```bash
    npm run allure:api
    ```
    Runs API tests and generates an Allure report, then opens it in the browser.

* **Run All Tests with Allure Reporting:**
    ```bash
    npm run test:allure
    ```
    Runs all tests (UI and API) with Allure reporting enabled.

* **Generate Allure Report:**
    ```bash
    npm run allure:generate
    ```
    Generates an Allure report from the results in the `allure-results` directory.

* **Open Allure Report:**
    ```bash
    npm run allure:open
    ```
    Opens the generated Allure report in the browser.

* **Run Allure Report for All Tests:**
    ```bash
    npm run allure:report
    ```
    Runs all tests, generates an Allure report, and opens it in the browser.

## 🤝 Contributing

If you'd like to contribute, please open an issue or submit a pull request.

## 📜 License

This project is licensed under the ISC License. See the `package.json` file for details.

---

# Automation Exercise - Playwright TypeScript Test Otomasyon Projesi

Bu proje, [Automation Exercise](http://automationexercise.com) web sitesi için Playwright ve TypeScript kullanılarak geliştirilmiş bir UI ve API test otomasyon çerçevesidir.

## ✨ Özellikler

* **Playwright**: Modern, hızlı ve güvenilir tarayıcı otomasyonu.
* **TypeScript**: Statik tipleme ile daha sağlam ve okunabilir kod.
* **Page Object Model (POM)**: Test bakımını basitleştiren ve yeniden kullanılabilirliği artıran tasarım deseni.
* **Özel Fixture'lar**: Testler için özel kurulum ve temizleme işlemlerinin yönetimi.
* **Faker.js**: Test verisi oluşturmak için kullanılan kütüphane.
* **Çoklu Tarayıcı Testi**: Chromium, Firefox ve WebKit üzerinde test çalıştırma desteği.
* **Allure Raporlama**: Gelişmiş, etkileşimli test raporları ile ekler ve adım ayrıntıları.
* **HTML Raporlama**: Test sonuçları için ayrıntılı HTML raporları.
* **Çevre Yapılandırması**: Farklı ortamlar arasında kolayca geçiş yapma (ör. dev, staging, prod).
* **API Testi**: Şema doğrulama ve yanıt doğrulama ile API test senaryoları içerir.

## 📋 Ön Koşullar

* [Node.js](https://nodejs.org/) (v18 veya üzeri önerilir)
* [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

## 🚀 Kurulum

1. **Depoyu Klonlayın:**
    ```bash
    git clone <repository-url> # <repository-url> yerine kendi repository adresinizi yazın
    cd automationexercise-playwright-ts
    ```

2. **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
    veya
    ```bash
    yarn install
    ```

3. **Playwright Tarayıcılarını Yükleyin:**
    ```bash
    npx playwright install
    ```

## 📂 Proje Yapısı

```
.
├── config/             # Test yapılandırma dosyaları
├── fixtures/           # Test verileri ve özel fixture'lar
├── models/             # Veri modelleri (TypeScript arayüzleri)
├── pages/              # Page Object Model sınıfları
├── playwright-report/  # Playwright HTML raporları
├── allure-results/     # Allure ham sonuçları
├── test-file/          # Testlerde kullanılan dosyalar
├── test-results/       # Ham test sonuçları
├── tests/              # Test senaryoları
│   ├── ui/             # UI testleri
│   └── api/            # API testleri
├── utils/              # Yardımcı fonksiyonlar ve konfigürasyonlar
├── .gitignore          # Git tarafından yok sayılan dosyalar
├── package.json        # Proje bağımlılıkları ve script'leri
├── package-lock.json   # Bağımlılıkların sabitlenmiş versiyonları
├── playwright.config.ts # Playwright konfigürasyon dosyası
├── tsconfig.json       # TypeScript derleyici seçenekleri
└── README.md           # Bu dosya
```

## ▶️ Testleri Çalıştırma

Testleri `package.json` dosyasındaki `scripts` bölümünü kullanarak veya doğrudan `npx playwright` komutlarıyla çalıştırabilirsiniz:

* **Tüm Testleri Çalıştır (Başsız Mod):**
    ```bash
    npx playwright test
    ```

* **Tüm Testleri Çalıştır (Tarayıcı Görünür Mod):**
    ```bash
    npx playwright test --headed
    ```

* **Belirli Bir Tarayıcıda Çalıştır:**
    ```bash
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    ```

* **Belirli Bir Test Dosyasını Çalıştır:**
    ```bash
    npx playwright test tests/ui/TC01.spec.ts
    ```

* **Belirli Bir Testi Çalıştır (Test Adına Göre):**
    ```bash
    npx playwright test -g "Register User"
    ```

## 📊 Test Raporları

### Playwright HTML Raporları
Testler yürütüldükten sonra, `playwright-report` dizininde ayrıntılı bir HTML raporu oluşturulur. Raporu görüntülemek için:
```bash
npx playwright show-report
```

### Allure Raporları
Allure, gelişmiş, etkileşimli test raporları sağlar. Kullanmak için:

1. **Testleri Çalıştırın (Allure sonuçları otomatik olarak oluşturulur):**
    ```bash
    npx playwright test
    ```

2. **Allure HTML Raporunu Oluşturun:**
    ```bash
    npx allure generate allure-results --clean -o allure-report
    ```

3. **Allure Raporunu Tarayıcıda Açın:**
    ```bash
    npx allure open allure-report
    ```

## ⚙️ Konfigürasyon

Playwright konfigürasyonu `playwright.config.ts` dosyasında bulunur. Aşağıdakileri özelleştirebilirsiniz:

* **`baseURL`**: Test edilen uygulamanın temel URL'si (`http://automationexercise.com`).
* **`timeout`**: Test adımları için varsayılan zaman aşımı (örneğin, `30000` ms).
* **`retries`**: Başarısız testlerin bir CI ortamında kaç kez yeniden denenmesi gerektiği (`process.env.CI ? 2 : 0`).
* **`projects`**: Farklı tarayıcılar ve cihazlar için yapılandırmalar (Chromium, Firefox, WebKit).
* **`use`**: Genel test ayarları (başsız mod, viewport boyutu, izleme ayarları vb.).

## 📜 Scriptler

`package.json` dosyasında aşağıdaki script'ler mevcuttur ve yaygın görevleri kolaylaştırır:

* **UI Testlerini Çalıştır:**
    ```bash
    npm run test:ui
    ```
    UI testlerini `chromium` projesi ile Allure raporlaması etkinleştirilmiş şekilde çalıştırır.

* **UI Testleri için Allure Raporunu Çalıştır:**
    ```bash
    npm run allure:ui
    ```
    UI testlerini çalıştırır, bir Allure raporu oluşturur ve ardından tarayıcıda açar.

* **API Testlerini Çalıştır:**
    ```bash
    npm run test:api
    ```
    API testlerini `api-tests` projesi ile Allure raporlaması etkinleştirilmiş şekilde çalıştırır.

* **API Testleri için Allure Raporunu Çalıştır:**
    ```bash
    npm run allure:api
    ```
    API testlerini çalıştırır, bir Allure raporu oluşturur ve ardından tarayıcıda açar.

* **Tüm Testleri Allure Raporlaması ile Çalıştır:**
    ```bash
    npm run test:allure
    ```
    Tüm testleri (UI ve API) Allure raporlaması etkinleştirilmiş şekilde çalıştırır.

* **Allure Raporunu Oluştur:**
    ```bash
    npm run allure:generate
    ```
    `allure-results` dizinindeki sonuçlardan bir Allure raporu oluşturur.

* **Allure Raporunu Aç:**
    ```bash
    npm run allure:open
    ```
    Oluşturulan Allure raporunu tarayıcıda açar.

* **Tüm Testler için Allure Raporunu Çalıştır:**
    ```bash
    npm run allure:report
    ```
    Tüm testleri çalıştırır, bir Allure raporu oluşturur ve ardından tarayıcıda açar.

## 🤝 Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir sorun açın veya bir çekme isteği gönderin.

## 📜 Lisans

Bu proje ISC Lisansı altında lisanslanmıştır. Ayrıntılar için `package.json` dosyasına bakın.