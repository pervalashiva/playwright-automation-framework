import {test, expect} from "@playwright/test";

test('Mouse Actions', async({page})=>
{
    await page.goto("https://demo.guru99.com/test/drag_drop.html");
     console.log(await page.title());

    const source =  page.locator('#credit2').getByText('BANK', { exact: true });
    const target = await page.locator("//ol[@id='bank']//li[@class='placeholder']");
        
    await (source).dragTo(target);
    await page.waitForTimeout(1000);

    await page.getByText('5000', { exact: true }).first()
    .dragTo( page.locator("//ol[@id='amt7']//li[@class='placeholder']"))

    await (source)
    .dragTo( page.locator("//ol[@id='loan']//li[@class='placeholder']"));

    await page.locator('a').filter({ hasText: '5000' }).last()
    .dragTo(page.locator("//ol[@id='amt8']//li[@class='placeholder']"));

    await page.waitForTimeout(1000);

    

})


test('Mouse Actions double', async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay#advanced");

    
    const dialog = page.on('dialog', async (dialog)=>
    {
        console.log(dialog.message());
        dialog.accept();
    })
     await page.getByRole('button', {name: "Double click"}).dblclick()

    await page.waitForTimeout(1000);

   
    await page.locator('#field1').press('Meta+A');
    await page.locator('#field1').press('Meta+C');
    await page.locator('#field2').press('Meta+V');

    await page.locator('#priceSlider').fill('88');
    await expect(page.locator('#priceSlider')).toHaveValue('88');

        const handle = page.locator('#slider-range .ui-slider-handle').first();

        const box = await handle.boundingBox();

        if (box) {
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        await page.mouse.move(startX, startY);
        await page.mouse.down();

        await page.mouse.move(startX + 50, startY, { steps: 10 });

        await page.mouse.up();
        }


    await page.waitForTimeout(1000);
    

})


test('Mouse Actions Prformance', async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay#popups");

    const button = page.locator('#toggleBtn')
    console.log(await button.innerText())
    await expect(button).toHaveText('Start');

    await button.click();

    await expect(button).not.toHaveText('Start');
    console.log(await button.innerText())
    await button.click();
    await expect(button).not.toHaveText('Stop');
    await page.waitForTimeout(2000);

    await page.locator("#rightClickBtn").click({button: "right"});

        const allOptions = await page.locator("#customContextMenu button").allInnerTexts();
        console.log(allOptions);
        expect(allOptions).toEqual(['Edit', 'Cut', 'Copy', 'Paste', 'Delete', 'Quit']);

        const quit = page.getByRole('button', {name: 'Quit'})
        expect(quit).toBeVisible();
        page.once('dialog', async(dialog)=>
        {
            console.log(dialog.message());
            dialog.accept();
        })
        await page.getByRole('button', {name: 'Quit'}).click();
    

})

test('Mouse Actions Double actions', async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay#popups");

    const name = await page.locator("#field1").fill("shiva");
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();
    const filed2 = await page.locator('#field2');
    expect(filed2).toHaveValue("shiva");


})


test.only('Mouse Actions Double actions', async({page})=>
{
    await page.goto("https://gotranscript.com/text-compare");

   await page.keyboard.press('A')
   await page.keyboard.up("")
   await page.keyboard.down("")

   


})