import { test } from './Fixtures/loginFixture.spec';
import {Page, expect} from "@playwright/test";

test('my test', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

     console.log(testInfo.title)
        console.log(testInfo.status)
           console.log(testInfo.retry)
              console.log(testInfo.workerIndex)
                 console.log(testInfo.duration)
        

     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await loginPage.waitForTimeout(2000);


});

test('my test retry', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

    
           console.log(testInfo.retry)
           
    
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await loginPage.waitForTimeout(6000);


});

test('my test retry caf', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

     console.log(testInfo.title)
        console.log(testInfo.status)
           console.log(testInfo.retry)
              console.log(testInfo.workerIndex)
                 console.log(testInfo.duration)
        

     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
 await loginPage.waitForTimeout(6000);

});

test('my test retry rew', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

     console.log(testInfo.title)
        console.log(testInfo.status)
           console.log(testInfo.retry)
              console.log(testInfo.workerIndex)
                 console.log(testInfo.duration)
        

     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await loginPage.waitForTimeout(6000);

});
test('my test retry awad', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

     console.log(testInfo.title)
        console.log(testInfo.status)
           console.log(testInfo.retry)
              console.log(testInfo.workerIndex)
                 console.log(testInfo.duration)
        

     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await loginPage.waitForTimeout(6000);

});

test('my test retryes', async ({ loginPage }, testInfo) => {

     console.log(await loginPage.title());

     console.log(testInfo.title)
        console.log(testInfo.status)
           console.log(testInfo.retry)
              console.log(testInfo.workerIndex)
                 console.log(testInfo.duration)
        

     await loginPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
     await loginPage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await loginPage.waitForTimeout(6000);

});
