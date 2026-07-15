import { test, expect } from '@playwright/test'

test('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'en-IN',
        timezoneId: 'Asia/Kolkata',
        geolocation: { latitude: 17.0005, longitude: 81.8040 },
        permissions: ['geolocation']
    });

    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');

    await context.close();

});

test('Samsung Galaxy S24 custom', async ({ browser }) => {

   const samsungS24 = {

    viewport: { width: 360, height: 780 }, // approx S24 CSS size
    userAgent: 'Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36',
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    };

    const context = await browser.newContext(samsungS24);

    const page = await context.newPage();

    await page.goto("https://app.vwo.com/#login");

    await context.close();
});

test('mobile context', async ({ browser }) => {

    const iphone = {
        viewport: { width: 375, height: 667},
        userAgent: 'Mozilla/5.0 (iphone; cpu iphone os 14_0 like Mac OS X',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };

    const context = await browser.newContext(iphone);

    const page = await context.newPage();

    await page.goto("https://app.vwo.com/#login");

    await context.close();
});

