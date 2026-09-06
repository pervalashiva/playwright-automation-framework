import { test } from '@playwright/test';
import fs from 'fs';

test('Login and save session storage', async ({ page }) => {

  await page.goto('https://sdetqa.vercel.app/login_app');

  await page.getByPlaceholder('Enter username').fill('admin');
  await page.getByPlaceholder('Enter password').fill('admin123');
  await page.getByLabel('⏳ Session', { exact: true }).click();
  await page.getByRole('button', { name: 'Login' }).click();

  const sessionStorage = await page.evaluate(() => {
    const data: Record<string, string> = {};

    for (let i = 0; i < window.sessionStorage.length; i++) {
      const key = window.sessionStorage.key(i);

      if (key) {
        data[key] = window.sessionStorage.getItem(key) || '';
      }
    }

    return data;
  });

  fs.writeFileSync(
    './storage/sessionStorage.json',
    JSON.stringify(sessionStorage, null, 2)
  );
});
