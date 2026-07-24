# Allure Reporting Tests

## Folder Purpose
This folder contains tests designed to verify the integration and generation of Allure reports for Playwright test executions.

## Description of Contents
- `230_Login.spec.ts`: A sample login test used to demonstrate and verify Allure reporting capabilities.

## Usage Instructions
To run the tests and generate reports:
```bash
npx playwright test tests/05_Allure_Reporting
npx allure generate -o allure-report --clean
npx allure open allure-report
```

## Notes
Requires the `@playwright/test` and `allure-playwright` packages to be installed and configured in `playwright.config.ts`.
