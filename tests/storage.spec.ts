import { test } from '@playwright/test';

test('Login and save storage admin 1', async ({ page, context }) => {

  await page.goto('https://sdetqa.vercel.app/login_app');

  await page.getByPlaceholder('Enter username').fill('admin');
  await page.getByPlaceholder('Enter password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await context.storageState({
    path: './storage/admincookies.json'
  });
});

test('Login and save storage admin2', async ({ page, context }) => {

  await page.goto('https://sdetqa.vercel.app/login_app');

  await page.getByPlaceholder('Enter username').fill('testuser1');
  await page.getByPlaceholder('Enter password').fill('testuser123');
        await page.getByLabel('💾 Local').click();
  await page.getByRole('button', { name: 'Login' }).click();

  await context.storageState({
    path: './storage/usercookies.json'
  });
});
