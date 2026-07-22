import { test, expect, Locator } from '@playwright/test'

test.describe('Multiple Elements Handling', () =>{

     test('Basic Test - Verify page title', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        
        const rightPanelText: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(rightPanelText.length)

        for(const link of rightPanelText) {
            if(link === "My Account") {
                await page.getByText('My Account').first().click();
                break;
            }
        }


        const rightPanelLink: Locator[] = await page.locator('a.list-group-item').all();

        for(const link of rightPanelLink) {
             console.log(await link.getAttribute("href"));
        }


     })
})