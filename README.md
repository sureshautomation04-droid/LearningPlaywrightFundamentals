# Learning Playwright Fundamentals

A project to learn and practice Playwright test automation fundamentals. It covers basic annotations, browser contexts, pages, and multi-page/multi-context scenarios with a GitHub Actions CI pipeline.

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
│   ├── 01_Basics/
│   │   ├── Lab209.spec.ts
│   │   └── Lab210_Test_Annoations.spec.ts
│   └── 02_first_tests/
│       ├── 211_First_Running_Test.spec.ts
│       ├── 212_Browser_Context_Pages.spec.ts
│       ├── 213_Multile_Context.spec.ts
│       ├── 214_Multiple_Pages.spec.ts
│       ├── 215_TEST_PW.spec.ts
│       ├── 216_Manual_Context.spec.ts
│       ├── 217_Manual_Context_Options.spec.ts
│       └── 218_Context_Reuse.spec.ts
├── .github/
│   └── workflows/
│       └── playwright.yml
├── playwright.config.ts
├── package.json
└── README.md
```

## Configuration

Tests are configured to run on Chromium by default. Edit `playwright.config.ts` to enable Firefox, WebKit, or mobile viewports.
