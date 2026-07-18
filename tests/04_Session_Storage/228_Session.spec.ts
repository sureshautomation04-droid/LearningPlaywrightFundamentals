import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://app.vwo.com/#login');
    await page.locator('#login-username').fill('admin@gmail.com');
    await page.locator('#login-password').fill('pass123');
    await page.locator('#js-login-btn').click();
    await page.waitForURL('**/dashboard**', { timeout: 10000 });

    await context.storageState({ path: './user-session.json' });
    console.log('Session saved to ./user-session.json');

    await browser.close();
})();
