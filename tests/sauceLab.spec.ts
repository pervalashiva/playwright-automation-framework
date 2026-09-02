import {test, expect} from "@playwright/test";

test("sauce lab Locators", async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button',{name: 'Login'}).click();

    const logo = page.locator('div.app_logo')
    await expect(logo.getByText('Swag Labs')).toBeVisible();

    await page.waitForTimeout(1000);

   await page.locator('#add-to-cart-sauce-labs-backpack').click();
   await page.locator('#add-to-cart-sauce-labs-bike-light').click();

    expect(await page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
    await page.waitForTimeout(1000);

}
)