import { test, expect, Locator } from "@playwright/test";

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: 'Make Appointment', disabled: false }).click();
    await page.getByRole("textbox", { name: 'Username'}).nth(1).fill('John Doe');
    await page.getByRole("textbox", { name: 'Password'}).nth(1).fill('ThisIsNotAPassword');
    await page.getByRole("button", { name: 'Login', disabled: false}).click();

    const makeAppointment: Locator = page.getByRole('heading', { name: 'Make Appointment'});
    await expect(makeAppointment).toBeVisible();



});