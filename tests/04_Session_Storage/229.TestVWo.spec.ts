import { test, expect } from '@playwright/test';
import path from 'path';

const sessionPath = path.resolve('./user-session.json');

test.use({ storageState: sessionPath });

test('access dashboard with saved session', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/dashboard');
    await expect(page.locator('#page-index-dashboard')).toBeVisible();
});

test('access settings with saved session', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/settings');
    await expect(page.locator('#page-index-settings')).toBeVisible();
});
