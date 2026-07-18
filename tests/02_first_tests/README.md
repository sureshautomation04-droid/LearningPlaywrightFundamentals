# First Tests

Explores the Playwright architecture: browser, contexts, pages, and test runner isolation.

## Test Files

| File | Description |
|------|-------------|
| `211_First_Running_Test.spec.ts` | First test: navigation, title assertion, and element visibility |
| `212_Browser_Context_Pages.spec.ts` | Browser → Context → Page hierarchy with manual launch and cleanup |
| `213_Multile_Context.spec.ts` | Multiple isolated contexts for different user roles (admin vs viewer) |
| `214_Multiple_Pages.spec.ts` | Multiple tabs within the same context, sharing cookies |
| `215_TEST_PW.spec.ts` | Playwright Test runner — auto-isolated `page` fixture per test |
| `216_Manual_Context.spec.ts` | Manually creating contexts in test runner for multi-user scenarios |
| `217_Manual_Context_Options.spec.ts` | Context options: viewport, locale, geolocation, mobile emulation |
| `218_Context_Reuse.spec.ts` | `test.use` to share context options across a `test.describe` block |
