import { test, expect } from '@playwright/test'

test('Verify the titile of app.vwo.com', async function({ page }){

    await page.goto('https://app.vwo.com')
    await expect(page).toHaveTitle('Login - Wingify')
});