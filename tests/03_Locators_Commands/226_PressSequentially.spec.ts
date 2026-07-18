import { test, expect, Locator } from '@playwright/test';

test('locators are lazy, strict, and autowait', async ({ page }) => {

    await page.goto("https://awesomeqa.com/practice.html");
    const firstName = page.locator('input[name="firstname"]');
    await firstName.pressSequentially('The Testing Academy', { delay: 200 });

    await page.waitForTimeout(4000);
    await page.goto('https://app.wingify.com/#/login');
    await page.waitForTimeout(4000);

    await page.goBack();

    await page.waitForTimeout(4000);

    await page.goForward();
    
    await page.waitForTimeout(4000);


})