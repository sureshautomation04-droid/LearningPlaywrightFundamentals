import { test, expect } from '@playwright/test';

test.describe('Handle DIV Dropdowns', () => {

    test('Select Language Dropdown', async ({ page }) => {

        // Navigate to the page
        await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

        // Step 1: Open language dropdown
        await page.getByTestId('lang-trigger').click();

        // Step 2: Select "Java"
        await page.getByRole('option', { name: 'Java', exact: true }).click();

        // Assertion: Verify selected value
        await expect(page.getByTestId('lang-trigger')).toContainText('Java');

        // ❗ Static wait (only for demo)
        await page.waitForTimeout(3000);
    });

    test('Select Experience Dropdown', async ({ page }) => {

        // Navigate again (each test is independent)
        await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

        // Step 1: Open experience dropdown
        await page.getByTestId('experience-trigger').click();

        // Step 2: Select "Mid-level (4-6 years)"
        await page.getByText('Mid-level (4-6 years)', { exact: true }).click();

        // Assertion: Verify selected value
        await expect(page.getByTestId('experience-trigger'))
            .toContainText('Mid-level (4-6 years)');

        // ❗ Static wait (only for demo)
        await page.waitForTimeout(3000);
    });

});