import { test } from './Fixtures/loginFixture.spec';
import {Page, expect} from "@playwright/test";

test('my test', async ({ loginPage }) => {

     console.log(await loginPage.title());

});
