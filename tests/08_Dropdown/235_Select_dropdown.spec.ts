import { test, expect, Locator } from '@playwright/test'

test('Basic Web test', async ({ page }) => {

    // Navigate to the dropdown page
    await page.goto('https://the-internet.herokuapp.com/dropdown')

    // Locate the dropdown element using its id
    const dropDown: Locator = page.locator('#dropdown')

    // ✅ Select option using VALUE attribute (value="1")
    // This selects "Option 1"
    await dropDown.selectOption('1')

    // ✅ Select option using visible TEXT (label)
    // This selects "Option 2"
    await dropDown.selectOption({ label: 'Option 2' })

    // ✅ Select option using INDEX (starts from 0)
    // index: 1 → selects second option ("Option 1")
    await dropDown.selectOption({ index: 1 })

    // ❗ Static wait (not recommended in real projects)
    // Used here only for demo/observation
    await page.waitForTimeout(3000)
})
