# Frame and Iframe Tests

## Folder Purpose
This folder contains test suites for interacting with content nested within `<iframe>` and `<frame>` elements.

## Description of Contents
- `239_frame.spec.ts`: Basic frame interaction tests.
- `240_multi_frame.spec.ts`: Tests for pages containing multiple frames.
- `241_Iframe_within_Iframe.spec.ts`: Complex scenarios where iframes are nested inside other iframes.

## Usage Instructions
To run the tests in this folder:
```bash
npx playwright test tests/09_Frame_Iframe
```

## Notes
Utilizes `frameLocator()` and `page.frame()` to switch contexts and interact with elements inside nested documents.
