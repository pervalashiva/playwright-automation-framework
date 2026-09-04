import {test, expect} from "@playwright/test";

test('Data Entry', async ({page})=>
{
   await page.goto("https://sdetqa.vercel.app/autoplay");

  const auto =  await page.locator('.navbar').getByText('AutoPlay').textContent()
  await expect( page.locator('.navbar').locator('span',{hasText:'AutoPlay'})).toBeVisible();
  console.log(auto);
   expect(auto).toEqual("AutoPlay");
   await expect(page).toHaveTitle('Web Automation Playground');
   expect (page.locator('.logo')).toBeVisible();

   await expect(page.getByPlaceholder('John Doe')).toBeEnabled();
   await expect(page.getByPlaceholder('John Doe')).toBeVisible();

   await expect(page.getByLabel('Full name'))
    .toHaveAttribute('maxlength', '15');

    await page.getByPlaceholder('John Doe').fill("John Canedy");

    await expect(page.getByPlaceholder('John@example.com')).toBeVisible();
    page.getByPlaceholder('John@example.com').fill("tester@example.com");

    await expect(page.getByLabel('Phone')).toBeVisible();
    await page.locator('#phone').fill("90303441607")

        await page.locator('#address').fill(
    '123 Main St\nHyderabad\nIndia'
    );

    await expect(page.getByLabel("Male", { exact: true })).toBeVisible();
    await page.getByLabel("Male", { exact: true }).check();

    await expect(page.getByLabel("Female", { exact: true })).not.toBeChecked();

    //CheckBoxes 

    await page.getByLabel(" Mon").check()
    await page.getByLabel(" Tue").check();
    expect(page.getByLabel(" Wed")).not.toBeChecked();

    //Submit Button assertions

    await expect(page.locator("//button[@type='submit'][normalize-space()='Submit']")).toBeVisible();
     await expect(page.locator("//button[@type='submit'][normalize-space()='Submit']")).toBeEnabled();
     await page.locator("//button[@type='submit'][normalize-space()='Submit']").click()



 

})