import { test, expect } from '@playwright/test';

test('locators are lazy, strict, and auto-wait', async ({ page }) => {
    await page.goto('https://app.vwo.com/#login');

    // Create locators — nothing happens yet (lazy)
    const usernameField = page.locator("#login-username");
    const passwordField = page.locator("#login-password");
    const loginButton = page.locator("#js-login-btn");

    // Actions (auto-wait happens here)
    await usernameField.fill("admin@gmail.com"); // better format
    await passwordField.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    // Error message locator
    const errorMessage = page.locator("#js-notification-box-msg");

    // Assertion (auto-waits internally)
    await expect(errorMessage).toContainText(
        'Your email, password, IP address or location did not match'
    );
});