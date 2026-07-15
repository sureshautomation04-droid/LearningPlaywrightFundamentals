import { test, expect } from '@playwright/test';

test('goto with different waitUntil options', async ({ page }) => {

    // 🔹 1. COMMIT
    // Navigation completes as soon as the server responds
    // (HTML may not be fully loaded yet)
    await page.goto('https://app.com/page1', { waitUntil: 'commit' });
    console.log('commit: server responded (initial response received)');


    // 🔹 2. DOMCONTENTLOADED
    // Waits until HTML is fully parsed and DOM is ready
    // (CSS, images, and other resources may still be loading)
    await page.goto('https://app.com/page2', { waitUntil: 'domcontentloaded' });
    console.log('domcontentloaded: HTML parsed, DOM ready');


    // 🔹 3. LOAD (DEFAULT)
    // Waits until the whole page is fully loaded
    // Includes HTML, CSS, images, scripts, etc.
    await page.goto('https://app.com/page3', { waitUntil: 'load' });
    console.log('load: all resources (HTML, CSS, JS, images) loaded');


    // 🔹 4. NETWORKIDLE
    // Waits until there are no network requests for at least 500ms
    // Useful for SPA (React/Angular) apps with API calls
    // ⚠️ Can be slow or unreliable if app has continuous polling
    await page.goto('https://app.com/page4', { waitUntil: 'networkidle' });
    console.log('networkidle: no network requests for 500ms');
});