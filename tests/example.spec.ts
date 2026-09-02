import { test, expect } from '@playwright/test';

test('Navigate the google', async ({ page }) => {
 
    await page.goto('https://www.google.com/');
await page.waitForTimeout(5000);
   const searchBox = page.getByRole('combobox', { name: 'Search' });
await page.waitForTimeout(5000);
await searchBox.fill('Enter Playwright automation');

await expect(searchBox).toHaveValue('Enter Playwright automation');

await searchBox.press('Enter');
await page.waitForTimeout(5000);




    



});
