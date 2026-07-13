import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

// skip the test
test.skip('skipped test', async ( { page }) => {
     // This test is skipped
});

// Only run this test
test('focused test', async ( { page }) => {
    // Only this test runs
});

// Mark as failing
test.fail('expected to fail', async ({ page }) => {
    // Test is expected to fail
});

// Slow test (3x timeout)
test('slow test', async ({ page }) => {
    test.slow();
    // This test will have 3x the default timeout
    await page.goto('https://example.com');
});

// Conditional skip
test('conditional', async ({page, browserName}) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox')
});