import { test, expect } from '@playwright/test';

test('Navigate the google', async ({ page }) => {
 
   await page.goto("https://playwright.dev/")
  const text = page.getByText('Playwright').first();
   await expect(text).toBeVisible()




});
