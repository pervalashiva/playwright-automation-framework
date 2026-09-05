import {test, expect} from "@playwright/test";

test('Data Entry', async ({page})=>
{
   await page.goto("https://sdetqa.vercel.app/autoplay#files");

  /*  await page.locator('#multipleFilesInput').setInputFiles(['/Users/shiva/Downloads/Filters.pdf' , '/Users/shiva/Downloads/CSS-Locators.pdf'] )
   await page.getByRole('button', {name:'Upload Multiple Files'}).click();
   await page.waitForTimeout(2000); */

   /* const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', {name: ' Download File'}).click()
   ])
   await download.saveAs('/Users/shiva/playwright-automation-framework/screenshots/downloaded')
 */

  /*   const [newPage] = await Promise.all([

        page.waitForEvent('popup'),
        page.getByRole('button', {name:'Open PDF'}).click()
    ]) */

    const text = await page.locator(".card").locator("#shadow_host")
       .locator('input[type="text"]').fill("shiva")

        //console.log(text);
        await page.locator(".card").locator("#shadow_host")
       .locator('input[type="checkbox"]').check();

        await page.locator(".card").locator("#shadow_host")
       .locator('input[type="file"]').setInputFiles('/Users/shiva/Downloads/Filters.pdf');


    await page.waitForTimeout(1000);

   await page
  .frameLocator('iframe[srcdoc]')
  .frameLocator('iframe')
  .locator('#innerInput')
  .fill('Shiva');


    await page.waitForTimeout(2000);
})


