import { test, expect, Locator } from '@playwright/test';

test('locators are lazy, strict, and auto-wait', async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    let usernameField: Locator = page.locator("xpath=//input[@data-qa='hocewoqisi']");
    let passwordField: Locator = page.locator('//input[@id="login-password"]');
    let loginButton: Locator = page.locator('//button[@id="js-login-btn"]')

    await usernameField.fill('admin');
    await passwordField.fill('pass123');
    await loginButton.click();

    let error_message: Locator = page.locator('//div[@id="js-notification-box-msg"]');
    await expect(error_message).toContainText(
        'Your email, password, IP address or location did not match');
})