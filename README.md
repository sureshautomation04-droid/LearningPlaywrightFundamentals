# Learning Playwright Fundamentals

A project to learn and practice Playwright test automation fundamentals.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Run tests in a specific file:

```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
```

## View Test Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   └── 01_Basics/
│       ├── Lab209.spec.ts
│       └── Lab210_Test_Annotations.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Configuration

Tests are configured to run on Chromium by default. Edit `playwright.config.ts` to enable Firefox, WebKit, or mobile viewports.
