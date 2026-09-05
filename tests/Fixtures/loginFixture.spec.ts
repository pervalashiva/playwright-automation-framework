import { test as base, Page } from '@playwright/test';

type MyFixture = {
  loginPage: Page;
};

export const test = base.extend<MyFixture>({
  loginPage: async ({ page }, use) => {
   
    await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click()

    await use(page);
    // teardown, if needed
  },
});
