import { test, expect, BrowserContext, Page} from '@playwright/test'

test('two users interact', async({browser})=>{

    const adminContext: BrowserContext = await browser.newContext();
    const adminPage: Page = await adminContext.newPage();

    const guestContext: BrowserContext = await browser.newContext();
    const guestPage: Page = await guestContext.newPage();

    await adminPage.goto("https://app.vwo.com/#login");
    await guestPage.goto("https://app.vwo.com/#dashboard/home");

    console.log("Admin URL:", adminPage.url());
    console.log("Guest URL:", guestPage.url());

    await adminContext.close();
    await guestContext.close();
})