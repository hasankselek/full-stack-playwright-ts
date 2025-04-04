# Automation Exercise - Playwright TypeScript Test Automation Project

This project is a UI test automation framework developed using Playwright and TypeScript for the [Automation Exercise](http://automationexercise.com) website.

## ✨ Features

*   **Playwright**: Modern, fast, and reliable browser automation.
*   **TypeScript**: More robust and readable code with static typing.
*   **Page Object Model (POM)**: Design pattern that simplifies test maintenance and enhances reusability.
*   **Custom Fixtures**: Management of custom setup and teardown operations for tests.
*   **Faker.js**: Library used for generating test data.
*   **Cross-Browser Testing**: Support for running tests on Chromium, Firefox, and WebKit.
*   **HTML Reporting**: Detailed HTML reports for test results.

## 📋 Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Setup

1.  **Clone the Project:**
    ```bash
    git clone <repository-url> # Replace <repository-url> with your repository address
    cd automationexercise-playwright-ts
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Install Playwright Browsers:**
    ```bash
    npx playwright install
    ```

## 📂 Project Structure

```
.
├── fixtures/         # Test data and custom fixtures
│   ├── customFixtures.ts
│   └── test-data.ts
├── models/           # Data models (TypeScript interfaces)
│   ├── subject.ts
│   └── user.ts
├── node_modules/     # Project dependencies
├── pages/            # Page Object Model classes
│   ├── BasePage.ts
│   └── ... (other page objects)
├── playwright-report/ # Directory where Playwright HTML reports are saved
├── test-file/        # Files used in tests (e.g., for file uploads)
├── test-results/     # Raw test results and trace files
├── tests/            # Test scenarios (spec files)
│   └── ui/           # UI tests
│       └── TC01.spec.ts
│       └── ...
├── utils/            # Helper functions and configurations
│   ├── logger.ts     # (Logging mechanism, if present)
│   └── testUtils.ts  # (Helper test functions, if present)
├── .gitignore        # Files ignored by Git
├── package.json      # Project dependencies and scripts
├── package-lock.json # Locked versions of dependencies
├── playwright.config.ts # Playwright configuration file
├── tsconfig.json     # TypeScript compiler options
└── README.md         # This file
```

## ▶️ Running Tests

You can add commands to the `scripts` section of your `package.json` file or use `npx playwright` commands directly to run tests:

*   **Run All Tests (Headless Mode):**
    ```bash
    npx playwright test
    ```

*   **Run All Tests (Headed Mode - Browser Visible):**
    ```bash
    npx playwright test --headed
    ```

*   **Run on a Specific Browser:**
    ```bash
    # Use the project names defined in playwright.config.ts
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    npx playwright test --project="Mobile Chrome"
    npx playwright test --project="Mobile Safari"
    ```

*   **Run a Specific Test File:**
    ```bash
    npx playwright test tests/ui/TC01.spec.ts
    ```

*   **Run a Specific Test (by Test Name):**
    ```bash
    # Example: Run the 'Register User' test inside TC01.spec.ts
    npx playwright test -g "Register User"
    ```

## 📊 Test Reports

After the tests are executed, a detailed HTML report is generated in the `playwright-report` directory. You can view the report using the following command:

```bash
npx playwright show-report
```

This command will open the report in your default browser.

## ⚙️ Configuration

The Playwright configuration is located in the `playwright.config.ts` file. You can modify settings such as:

*   `baseURL`: The base URL of the application under test (`http://automationexercise.com`).
*   `timeout`: Default timeout for test steps (e.g., `30000` ms).
*   `retries`: How many times failed tests should be retried in a CI environment (`process.env.CI ? 2 : 0`).
*   `projects`: Configurations for different browsers and devices (Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari).
*   `use`: Global test settings (headless mode, viewport size, trace settings, etc.). The `headless: false` setting runs tests with the browser UI visible.

## 🤝 Contributing

If you would like to contribute, please open an issue or submit a pull request.

## 📜 License

This project is licensed under the ISC License. See the `package.json` file for details. 