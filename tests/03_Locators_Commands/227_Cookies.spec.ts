import { test, expect, BrowserContext, Page, Cookie } from '@playwright/test';

test('add, read, clear cookies', async (
  { page, context }: { page: Page; context: BrowserContext }
) => {

    await page.goto("https://app.vwo.com/#login");

    // 👉 Add cookie (typed)
    const newCookie: Cookie = {
        name: 'vwo',
        value: 'eyJ1c2VySWQiOiIxNzU1NzE0IiwiYWNjb3VudElkIjoiMTI1NzE5MiIsInRva2VuIjoibGdmMnhReXZ0V0RfSjhadlExQ0RKWjR5Z1o1WmVxY3lWVFFoZzBlMkItYWJFLWNqQmJ0ejBFOTJodkh0WEZ0TUNLWVM5OHlNdzR1bEdtcmNlZmphN2ciLCJ2YWxpZGl0eSI6IjcyMDAiLCJ2ZXJzaW9uIjoxLCJoYXNoIjoiOTEyYjlmZTYwMmEzYjViODEwOTZiMGYzNjI2ZjMyMzI5YTYxYzI2MyJ9',
        domain: 'app.vwo.com',
        path: '/',
        expires: -1, // session cookie
        httpOnly: false,
        secure: true,
        sameSite: 'Lax'
    };

    await context.addCookies([newCookie]);

    // 👉 Read cookies (typed as Cookie[])
    const cookies: Cookie[] = await context.cookies();

    console.log("Cookies:", cookies);
    console.log('Cookies_length:', cookies.length);

    cookies.forEach((cookie: Cookie) => {
        console.log(`${cookie.name} = ${cookie.value}`);
    });

    // 👉 Assertion
    const found: Cookie | undefined = cookies.find((c: Cookie) => c.name === 'vwo');
    expect(found).toBeTruthy();

    // 👉 Clear cookies (returns void)
    const clearCookies: void = await context.clearCookies();

    console.log("After clearing cookies:", clearCookies);

    // 👉 Verify
    const cookiesAfterClear: Cookie[] = await context.cookies();
    expect(cookiesAfterClear.length).toBe(0);
});