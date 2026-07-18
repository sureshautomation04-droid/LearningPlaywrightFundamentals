# Learning Playwright Fundamentals

A project to learn and practice Playwright test automation fundamentals. Covers basic annotations, browser contexts, pages, multi-page/multi-context scenarios, and CI integration with GitHub Actions.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Run tests with UI mode |
| `npx playwright test tests/01_Basics/Lab209.spec.ts` | Run a specific test file |
| `npx playwright test --grep "smoke"` | Run tests matching a tag |

## View Report

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   ├── 01_Basics/
│   │   ├── Lab209.spec.ts
│   │   └── Lab210_Test_Annoations.spec.ts
│   ├── 02_first_tests/
│   │   ├── 211_First_Running_Test.spec.ts
│   │   ├── 212_Browser_Context_Pages.spec.ts
│   │   ├── 213_Multile_Context.spec.ts
│   │   ├── 214_Multiple_Pages.spec.ts
│   │   ├── 215_TEST_PW.spec.ts
│   │   ├── 216_Manual_Context.spec.ts
│   │   ├── 217_Manual_Context_Options.spec.ts
│   │   └── 218_Context_Reuse.spec.ts
│   └── 03_Locators_Commands/
│       ├── 219_Commands.spec.ts
│       ├── 220_GotoCommands.spec.ts
│       ├── 221_Reffer_Command.spec.ts
│       ├── 222_Automation.vwo.com.spec.ts
│       ├── 223_Xpath.spec.ts
│       ├── 224_GetRole.spec.ts
│       ├── 225_CSS_Locators.spec.ts
│       ├── 226_PressSequentially.spec.ts
│       └── 227_Cookies.spec.ts
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .gitignore
├── playwright.config.ts
├── package.json
└── README.md
```

## Configuration

Tests run on Chromium by default. Edit `playwright.config.ts` to enable Firefox, WebKit, or mobile viewports.

## CI/CD

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs tests on every push and pull request to main/master, with HTML report uploaded as an artifact.
