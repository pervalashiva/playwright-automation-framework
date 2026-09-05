import { test as base, Page } from '@playwright/test';

type MyFixture = {
  loginPage: Page;
};

export const test = base.extend<MyFixture>({
  loginPage: async ({ page }, use) => {
   
   console.log('SETUP: Login');

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    console.log('SETUP: Finished');

    await use(page);

    console.log('TEARDOWN: Starting logout');

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('#logout_sidebar_link').click();

    console.log('TEARDOWN: Finished');



  },
});
