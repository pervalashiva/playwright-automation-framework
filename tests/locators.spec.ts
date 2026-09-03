import {expect, test} from "@playwright/test";

test('Locators practice', async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/filters_practice");

    await expect(page).toHaveTitle('Playwright Locators · practice lab');

    
   const web = await page.title();
   console.log(web)
   //javascript assertion
   expect(web).toBe('Playwright Locators · practice lab');


   await page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button').click()
   await page.getByRole('listitem').filter({hasText:'Product 1'}).getByRole('button').click();

   await page.getByRole('listitem').filter({hasNotText:'Headphones'}).getByText('Out of stock');
   

   const card =  page.locator('.card').filter({hasText: 'Filter · hasNotText'});
   const prod = await card.getByRole('listitem').filter({hasNotText: 'Out of stock'}).count();
   console.log(prod);

   const appleText= await page.getByTestId('apple')
   await expect(appleText).toHaveText("🍏 apple");

    expect(page.getByTestId('orange')).toHaveText("🍊 orange");

       const idCount= await  page.locator(".fruit-list").getByRole('listitem').count()
       expect(idCount).toBe(5);

    const but = await page.locator('.card').getByRole('listitem').filter({hasText: '👤 John'})
    await expect(but.getByRole('button',{name: 'Say goodbye'})).toBeVisible();

    const but1 = page.locator('.card').getByRole('listitem').filter({hasText: "👤 Mary"})
    await expect(but1.getByRole('button', {name: "Say hello"})).toHaveText('Say hello');

        const but3 = await page.locator('.card').getByRole('listitem').filter({hasText: '👤 John'})
                    .getByRole('button',{name: 'Say goodbye'}).count();
         expect(but3).toBe(1);

    const but4 = await page.locator('.card').getByRole('listitem').filter({hasText: "👤 Mary"})
                        .getByRole('button', {name:'say hello'}).count();
                        expect(but4).toBe(1);

    const but5 = await page.locator('.card').getByRole('listitem').filter({hasText:'👤 John'}).getByRole('button').count();
    await expect(but5).toBe(2);

    const but6 = await page.locator('.card').getByRole('listitem').filter({hasText: "👤 Mary"}).count()

     await expect(but6).toBe(2);
    

   





})