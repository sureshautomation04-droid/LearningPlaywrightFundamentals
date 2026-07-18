# Locators & Commands

This folder covers Playwright locator strategies, navigation commands, and browser context APIs.

## Test Files

| File | Description |
|------|-------------|
| `219_Commands.spec.ts` | `goto` with `waitUntil` options: `commit`, `domcontentloaded`, `load`, `networkidle` |
| `220_GotoCommands.spec.ts` | Simple `goto` with default `load` and custom `referer` header |
| `221_Reffer_Command.spec.ts` | Setting a `Referer` header for the entire browser context via `extraHTTPHeaders` |
| `222_Automation.vwo.com.spec.ts` | Lazy locators with `fill`/`click` actions and auto-waiting assertions on VWO login |
| `223_Xpath.spec.ts` | XPath locators (`//input[@data-qa='...']`, `//button[@id='...']`) on VWO login |
| `224_GetRole.spec.ts` | Accessibility role-based locators (`getByRole`) on the Katalon Cura demo app |
| `225_CSS_Locators.spec.ts` | CSS descendant selectors (`div.first span`) and iterating over multiple elements |
| `226_PressSequentially.spec.ts` | `pressSequentially` with delay, then `goBack` / `goForward` navigation |
| `227_Cookies.spec.ts` | Adding, reading, and clearing cookies via `context.addCookies` / `context.cookies` / `context.clearCookies` |
