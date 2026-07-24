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
│   ├── 03_Locators_Commands/
│   │   ├── 219_Commands.spec.ts
│   │   ├── 220_GotoCommands.spec.ts
│   │   ├── 221_Reffer_Command.spec.ts
│   │   ├── 222_Automation.vwo.com.spec.ts
│   │   ├── 223_Xpath.spec.ts
│   │   ├── 224_GetRole.spec.ts
│   │   ├── 225_CSS_Locators.spec.ts
│   │   ├── 226_PressSequentially.spec.ts
│   │   ├── 227_Cookies.spec.ts
│   │   └── README.md
│   ├── 04_Session_Storage/
│   │   ├── 228_Session.spec.ts
│   │   ├── 229.TestVWo.spec.ts
│   │   └── README.md
│   ├── 05_Allure_Reporting/
│   │   ├── 230_Login.spec.ts
│   │   └── README.md
│   ├── 06_Multiple_Element/
│   │   ├── 231_Multiple_Element.spec.ts
│   │   └── README.md
│   ├── 07_WebTables/
│   │   ├── 232_WebTable_Basic.spec.ts
│   │   ├── 233_WebTable_Dyanamic.spec.ts
│   │   ├── 234_Web.spec.ts
│   │   └── README.md
│   ├── 08_Dropdown/
│   │   ├── 235_Select_dropdown.spec.ts
│   │   ├── 236_Div_dropdown.spec.ts
│   │   ├── 237_Adavanced_dropdown.spec.ts
│   │   ├── 238_Adavanced_dropdownv2.spec.ts
│   │   └── README.md
│   └── 09_Frame_Iframe/
│       ├── 239_frame.spec.ts
│       ├── 240_multi_frame.spec.ts
│       ├── 241_Iframe_within_Iframe.spec.ts
│       └── README.md
├── utils/
│   └── CustomTTAReporter.ts
├── .gitignore
├── playwright.config.ts
├── package.json
└── README.md
```

## Configuration

Tests run on Chromium by default. Edit `playwright.config.ts` to enable Firefox, WebKit, or mobile viewports.

## Reporting

The project includes:
- **Playwright Reporter**: `npx playwright show-report`
- **Allure Reporting**: Tests in `05_Allure_Reporting/` demonstrate Allure integration
- **Custom TTA Reporter**: A custom reporter is available in `utils/CustomTTAReporter.ts`

## Test Coverage

| Module | Description |
|--------|-------------|
| 01_Basics | Playwright annotations and basic test structure |
| 02_first_tests | Browser contexts, pages, multi-page/multi-context scenarios |
| 03_Locators_Commands | CSS/XPath locators, commands, cookies |
| 04_Session_Storage | Session storage and authentication |
| 05_Allure_Reporting | Allure reporting integration |
| 06_Multiple_Element | Handling multiple elements |
| 07_WebTables | Static and dynamic web table handling |
| 08_Dropdown | Select, div-based, and advanced dropdown interactions |
| 09_Frame_Iframe | Frame and iframe handling, vehicle registration form |



## License

This project is for educational purposes.
