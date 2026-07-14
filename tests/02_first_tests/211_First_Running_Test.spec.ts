// **Creating your first Playwright test:**

// - Test structure
// - Basic assertions
// - Navigation
// - Element interaction

import { test, expect, Locator } from '@playwright/test'

test('Verify our first TC', async({page}) => {

    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - Wingify');

   const img_VWO: Locator =  page.locator('#vow-login-logo');
   await expect(img_VWO).toBeVisible();
})