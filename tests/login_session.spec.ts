import { test } from '@playwright/test';
import fs from 'fs';

test('Reuse session storage', async ({ page }) => {

  const sessionStorage = JSON.parse(
    fs.readFileSync('./storage/sessionStorage.json', 'utf-8')
  );

  await page.addInitScript((storage) => {
    for (const [key, value] of Object.entries(storage)) {
      window.sessionStorage.setItem(key, value as string);
    }
  }, sessionStorage);

  await page.goto('https://sdetqa.vercel.app/login_app');
await page.waitForTimeout(4000);
  // Session storage is now available to the application
});
 