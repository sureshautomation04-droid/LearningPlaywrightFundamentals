import { test, expect, FrameLocator, Locator } from '@playwright/test';


test('Locate multi frame', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    const frame: FrameLocator = page.frameLocator('[name="main"]');

    const headerText: string = await frame.locator('#main-heading').innerText();

    console.log(headerText);

    await expect(frame.locator('#main-heading')).toBeVisible();

    // total number of <frame> elements on the page
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames'+ allFrames.length)

    for(const frame of allFrames ){

        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(5000);
});