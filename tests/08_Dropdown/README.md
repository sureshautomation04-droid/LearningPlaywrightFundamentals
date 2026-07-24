# Dropdown Tests

## Folder Purpose
This folder contains test suites for automating different types of dropdown menus, including standard HTML select elements and custom div-based dropdowns.

## Description of Contents
- `235_Select_dropdown.spec.ts`: Tests for standard `<select>` elements.
- `236_Div_dropdown.spec.ts`: Tests for custom dropdowns implemented with `<div>` or `<ul>` elements.
- `237_Adavanced_dropdown.spec.ts`: Advanced dropdown interaction scenarios.
- `238_Adavanced_dropdownv2.spec.ts`: Iteration 2 of advanced dropdown tests.

## Usage Instructions
To run the tests in this folder:
```bash
npx playwright test tests/08_Dropdown
```

## Notes
Covers both simple selection and complex searchable/multi-select dropdown components.
