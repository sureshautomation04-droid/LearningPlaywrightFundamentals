import { test, expect } from '@playwright/test';

test.describe('Web table', () => {

    test('Verify that Helen Bennett is actually living in the UK', async ({ page }) => {

        await page.goto('https://awesomeqa.com/webtable.html');

        // This is Xpath

        // //table[@id="customers"]/tbody/tr[
        // 5 - i
        // ]/td[
        // 2 - j
        // ]

        const firstPart: string = '//table[@id="customers"]/tbody/tr[';
        const secondPart: string = ']/td[';
        const thirdPart: string = ']';

        const rows: number = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const cols: number = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        for (let i: number = 2; i <= rows; i++) {
            for (let j: number = 1; j <= cols; j++) {

                const dynamicPath: string = `${firstPart}${i}${secondPart}${j}${thirdPart}`;

                const data: string = await page.locator(dynamicPath).innerText();

                console.log(`Row ${i}, Col ${j}: ${data}`);
            }
        }



         

    });

    test('Verify that Island Trading is actually living in the UK', async ({ page }) => {

        await page.goto('https://awesomeqa.com/webtable.html');

        // Playwright Native Locators is very much recommended. 
        const row = page.locator('#customers tbody tr', { hasText: 'Island Trading' });

        const country: string = await row.locator('td').nth(2).innerText();

        console.log(`Helen Bennett is in - ${country}`);

        expect(country).toBe('UK');

    });


   


});