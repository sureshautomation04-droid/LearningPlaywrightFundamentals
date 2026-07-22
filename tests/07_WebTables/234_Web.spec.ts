import {test,expect} from '@playwright/test'

test('web taqble click checkbox', async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable')

      // ✅ Click checkbox for Aarav.Sharma

    await page.locator(
        "//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
    ).click();

    // ✅ Click checkbox for Priya.Nair

    await page

        .locator('tr', { hasText: 'Priya.Nair' })
        .locator('input[type="checkbox"]')
        .click();

    // ✅ Click first cell for Rohan.Mehta row

    await page

        .locator('tr', { hasText: 'Rohan.Mehta' })
        .locator('td')
        .first()
        .click();


const name = 'kabir'; // dynamic input

await page.locator('#employee-search').fill(name);

// Wait for filtered result & click dynamically
await page
    .locator('tr', { hasText: name })
    .locator('td')
    .first()
    .click();   
    
     const displayText = page.locator('#selected-output');   
    await expect(displayText).toHaveText('Aarav.Sharma, Priya.Nair, Rohan.Mehta, Kabir.Khan')   
    await page.waitForTimeout(3000);
})


