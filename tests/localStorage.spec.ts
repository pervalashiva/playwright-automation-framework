import {test, expect} from "@playwright/test";

    test.describe.configure({mode:'serial'});
test('Login local storage admin 1', async({browser})=>
{
    const context = await browser.newContext({storageState: './storage/admincookies.json'})
    const page = await context.newPage();
    await page.goto("https://sdetqa.vercel.app/login_app");
    await page.getByText('Dashboard Welcome', { exact: true }).isVisible();
    await expect( page.locator('span:has-text("admin")')).toContainText('admin');

    await page.waitForTimeout(2000);
})

test('Login local storage as user admin', async({browser})=>
{
    const context = await browser.newContext({storageState: './storage/usercookies.json'})
    const page = await context.newPage();
    await page.goto("https://sdetqa.vercel.app/login_app");
    await page.getByText('Dashboard Welcome', { exact: true }).isVisible();
    await expect( await page.getByText('Welcome', { exact: true })).toContainText('Welcome');

    await page.waitForTimeout(2000);
})