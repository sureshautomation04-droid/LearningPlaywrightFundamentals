# Web Tables Tests

## Folder Purpose
This folder contains test suites for automating interactions with various types of web tables, including static and dynamic tables.

## Description of Contents
- `232_WebTable_Basic.spec.ts`: Tests for basic web table interactions.
- `233_WebTable_Dyanamic.spec.ts`: Tests for handling dynamically updating web tables.
- `234_Web.spec.ts`: General web table tests.

## Usage Instructions
To run the tests in this folder:
```bash
npx playwright test tests/07_WebTables
```

## Notes
Tests typically involve complex CSS/XPath selectors to target specific cells based on row and column indices.
