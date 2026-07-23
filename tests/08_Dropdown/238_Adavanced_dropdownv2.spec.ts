import { test, expect } from '@playwright/test';

test('Basic Web Test - Handle All Select Box Types', async ({ page }) => {

    // Navigate to the page
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // =========================================
    // ✅ 1) Single Select (Searchable Dropdown)
    // =========================================

    // Open dropdown
    await page.getByTestId('rs-single').click();

    // Type partial text to filter options
    await page.getByTestId('rs-single-input').fill('play');

    // Select "Playwright" from filtered results
    await page.getByRole('option', { name: 'Playwright' }).click();

    // Assertion: verify selected value is displayed
    await expect(page.locator('#rs-single .tta-rs__single-value'))
        .toHaveText('Playwright');


    // =========================================
    // ✅ 2) Multi Select Dropdown
    // =========================================

    const multi = page.getByTestId('rs-multi');

    // Select multiple options
    for (const name of ['Playwright', 'Pytest', 'TestNG']) {
        await multi.click(); // open dropdown each time
        await page.getByRole('option', { name }).click();
    }

    // Remove one selected option (Pytest)
    await multi
        .locator('.tta-rs__multi-value:has-text("Pytest") .tta-rs__multi-value__remove')
        .click();


    // =========================================
    // ✅ 3) Creatable Dropdown (Custom Input)
    // =========================================

    // Type a new custom value
    await page.getByTestId('rs-creatable-input').fill('chaos-engineering');

    // Press Enter to create/select the new value
    await page.getByTestId('rs-creatable-input').press('Enter');

    // Assertion: verify new tag is created
    await expect(
        page.locator('#rs-creatable .tta-rs__multi-value', { hasText: 'chaos-engineering' })
    ).toBeVisible();


    // =========================================
    // ✅ 4) Grouped Dropdown
    // =========================================

    // Open grouped dropdown
    await page.getByTestId('rs-grouped').click();

    // Select option from a specific group ("Edge")
    await page
        .locator('.tta-rs__group[data-group="Edge"]')
        .getByRole('option', { name: 'Vercel Edge' })
        .click();


    // =========================================
    // ✅ 5) Async (Dynamic Search Dropdown)
    // =========================================

const input = page.getByTestId('rs-async-input');

// Type search text
await input.fill('pun');

// Wait for dropdown menu to be visible
const menu = page.getByTestId('rs-async-menu');
await expect(menu).toBeVisible();

// Locate option INSIDE the menu (important)
const option = menu.getByRole('option', { name: 'Pune' });

// Wait until option is visible & clickable
await expect(option).toBeVisible();

// Click the option
await option.click();

});