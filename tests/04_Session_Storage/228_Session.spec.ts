import { test, chromium } from "@playwright/test";

test("authentication", async () => {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#/login");
    await page.waitForTimeout(2000);

    await page.locator("#login-username").fill("dgd56@mailnesia.site");
    await page.locator("#login-password").fill("Wingify@1234");
    await page.locator("#js-login-btn").click();

   // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(3000);

  

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();
});

