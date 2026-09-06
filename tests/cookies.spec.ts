import {  expect, Expect } from "@playwright/test";
import { test } from '@playwright/test';
import fs from 'fs';

test.describe.configure({mode:"serial"});

const cookiesfile = './storage/cookies.json';
const urlpage = "https://sdetqa.vercel.app/login_app";

test("Login and save cookies storage", async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(urlpage);

    //login

    await page.getByRole('textbox', {name: 'Username'}).fill("admin");
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
    await page.getByLabel(' 🍪 Cookie').check();
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(await page.getByText('Dashboard Welcome', {exact: true})).toBeVisible();

    //get all cookies

    const cook =await context.cookies();

    fs.writeFileSync(cookiesfile, JSON.stringify(cook, null, 2));

    console.log("cookies saved successfully")

    await page.waitForTimeout(6000);


})


test("reLogin with saved cookies ", async({browser})=>
{
    const context = await browser.newContext();
    const savedCookies = JSON.parse(fs.readFileSync(cookiesfile,'utf-8'))
    context.addCookies(savedCookies);

    const page = await context.newPage();
    await page.goto(urlpage);

    //login no login credentials 

    await expect( page.getByText('Dashboard Welcome', {exact: true})).toBeVisible();
     await page.waitForTimeout(6000);


})
