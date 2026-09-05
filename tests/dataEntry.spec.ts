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

test("checkBoxes", async ({page})=>
{
   await page.goto("https://sdetqa.vercel.app/autoplay");

    const allDays = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];

   /* const allCheckBoxes = allDays.map((day)=>
    {
        return page.getByLabel(day);

    })

    for(const checkBoxes of allCheckBoxes)
    {
        await checkBoxes.check();

    } */

        for(let day of allDays)
        {
            const week =  page.getByLabel(day);
           await week.check();
           await expect(week).toBeChecked();
        }
        for(let day of ['Thu', 'Fri', 'Sat'])
        {
            const ch = page.getByLabel(day);
            await ch.uncheck();
            await expect(ch).not.toBeChecked();

            if( await ch.isChecked() )
            {
                await ch.uncheck();
                await expect(ch).not.toBeChecked();
            }
            else{
                await ch.check();
                await expect(ch).toBeChecked();
            }
        }
        await page.locator("#country").selectOption({label: 'UK'});
        await page.locator("#colors").selectOption(['Blue','Green','Red']);
        await page.locator('#sorted').selectOption({index:3})

        await page.locator('#datepicker1').fill("07/23/1996")
        await page.keyboard.press("Enter");

        await page.getByRole('heading', {name:' Dynamic System Processes Table'}).scrollIntoViewIfNeeded();


        //Dynamic Table 

      const rows = page.locator("table tbody tr");

        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const rowText = await row.innerText();

            if (rowText.includes("Firefox")) {
                console.log("Found Firefox");

                const rowData = await row.locator("td").allInnerTexts();
                console.log(rowData);
            }
        }

})
test('Work with dialog boxs', async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay#popups");


    // Simple Alert
    page.once('dialog', async (dialog) => {

        console.log(dialog.message());

        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Simple' }).click();


    // Confirm → Alert
    page.once('dialog', async (dialog) => {

        console.log(dialog.message()); // Confirm?

        await dialog.accept();

        page.once('dialog', async (dialog) => {

            console.log(dialog.message()); // Confirmed

            await dialog.accept();
        });
    });

    await page.getByRole('button', { name: 'Confirm' }).click();


    // Prompt → Alert
    page.once('dialog', async (dialog) => {

        console.log(dialog.message()); // Enter name:

        await dialog.accept("Shiva");

        page.once('dialog', async (dialog) => {

            console.log(dialog.message()); // Hello Shiva

            await dialog.accept();
        });
    });

    await page.getByRole('button', { name: 'Prompt' }).click();

});

test('Work with popups', async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay#popups");

    await page.getByRole('button', { name: 'Popup' }).click();

    await page.getByRole('button', { name: 'Yes' }).click();

    await page.getByRole('button', { name: 'Popup' }).click();

     await page.getByRole('link', { name: 'No, maybe next time' }).click();

});

test.only('Work with windows', async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay#popups");

    const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
            page.getByRole('button', { name: 'New Tab' }).click()
        ]);

        await newPage.waitForLoadState();

        console.log(await newPage.title());
        console.log(newPage.url());

        page.on('dialog', async(dialog)=>
        {
            console.log(dialog.message());

            await dialog.accept();
        })
        await page.getByRole('button', {name: 'Simple'}).click();
       await  page.waitForTimeout(1000);
        await newPage.getByRole('link', {name:'Get started'}).click()
        await newPage.waitForTimeout(1000);

    // new window

        const [newW] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', {name:'New Window'}).click()
        ])
        
        await newW.waitForTimeout(1000);
         console.log("Title of new window"+newW.title())
         console.log( "URL of new window"+newW.url());
    await newW.waitForTimeout(1000);
})

