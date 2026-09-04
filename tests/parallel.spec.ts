import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('Test 1', async ({ page }, testInfo) => {
  console.log(`Test 1 started - Worker: ${testInfo.workerIndex}`);

  await page.goto('https://example.com');

  await page.waitForTimeout(10000);

  console.log(`Test 1 finished - Worker: ${testInfo.workerIndex}`);
});

test('Test 2', async ({ page }, testInfo) => {
  console.log(`Test 2 started - Worker: ${testInfo.workerIndex}`);

  await page.goto('https://example.com');

  await page.waitForTimeout(10000);

  console.log(`Test 2 finished - Worker: ${testInfo.workerIndex}`);
});

test('Test 3', async ({ page }, testInfo) => {
  console.log(`Test 3 started - Worker: ${testInfo.workerIndex}`);

  await page.goto('https://example.com');

  await page.waitForTimeout(10000);

  console.log(`Test 3 finished - Worker: ${testInfo.workerIndex}`);
});

test('Test 4', async ({ page }, testInfo) => {
  console.log(`Test 4 started - Worker: ${testInfo.workerIndex}`);

  await page.goto('https://example.com');

  await page.waitForTimeout(10000);

  console.log(`Test 4 finished - Worker: ${testInfo.workerIndex}`);
});

