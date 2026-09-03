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

test.only("OrangeHRM lab Locators", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button',{name: 'Login'}).click();

   const dash =  page.getByRole('heading',{name:'Dashboard'});
    await expect(dash).toBeVisible();
    
   await page.getByText('Admin', { exact: true }).click();
   await page.getByRole('button', {name: 'Add'}).click();

    const userRole = page
    .locator('.oxd-input-group')
    .filter({ hasText: 'User Role' });

    await userRole.locator('.oxd-select-text').click();
    await page.getByRole('option', { name: 'Admin' }).click();
    
    await page.waitForTimeout(5000);

}
)