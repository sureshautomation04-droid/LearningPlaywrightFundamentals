import { test, expect } from '@playwright/test';

test('Basic Web Test - Handle Different Select Boxes', async ({ page }) => {

    // Navigate to the page
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // =========================
    // ✅ Single Select Dropdown
    // =========================

    // Open dropdown
    await page.locator("#rs-single").click();

    // Select "Cypress"
    await page.getByText("Cypress").click();


    // =========================
    // ✅ Multi Select Dropdown
    // =========================

    // Open multi-select dropdown
    await page.locator("#rs-multi").click();

    // Select multiple values
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("JUnit", { exact: true }).click();

    // Close dropdown using keyboard
    await page.keyboard.press("Escape");


    // =========================
    // ✅ Creatable Dropdown
    // =========================

    // Open creatable dropdown
    await page.locator("#rs-creatable").click();

    // Select available options (or create if allowed)
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();

    // Close dropdown
    await page.keyboard.press("Escape");


    // =========================
    // ✅ Async (Searchable) Dropdown
    // =========================

    // Open async dropdown
    await page.locator("#rs-async").click();

    // Type partial text to trigger API search
    await page.getByTestId('rs-async-input').fill('pun');

    // Wait for dropdown results to load and verify suggestion
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');

    // Select "Pune"
    await page.getByRole('option', { name: 'Pune' }).click();


    // ❗ Static wait (only for demo, avoid in real framework)
    await page.waitForTimeout(5000);
});