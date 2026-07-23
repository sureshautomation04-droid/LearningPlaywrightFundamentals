import { test, expect, FrameLocator } from '@playwright/test';



test('Vehicle registration inside iframe', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    const vechileFrame: FrameLocator = page.frameLocator('#frame-one');

    await vechileFrame.getByPlaceholder('e.g. Test Automation').fill('Test Automation Vehicle');
    await vechileFrame.getByPlaceholder('Aarav Sharma').fill('Suresh');
    await vechileFrame.getByPlaceholder('MH-12-AB-1234').fill('MH-12-AB-5678');
    await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vechileFrame.locator('#RESULT_TextField-4').fill('2015');

    await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await vechileFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(5000);

    await page.waitForTimeout(3000)


});


