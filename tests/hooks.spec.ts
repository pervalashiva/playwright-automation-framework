import {test, expect} from "@playwright/test";

test.beforeAll(async () => {
  console.log('A');
});

test.beforeEach(async () => {
  console.log('B');
});

test.afterEach(async () => {
  console.log('C');
});

test.describe('Outer', () => {

  test.beforeAll(async () => {
    console.log('D');
  });

  test.beforeEach(async () => {
    console.log('E');
  });

  test.afterEach(async () => {
    console.log('F');
  });

  test.describe('Inner', () => {

    test.beforeEach(async () => {
      console.log('G');
    });

    test.afterEach(async () => {
      console.log('H');
    });

    test('Test 1', async () => {
      console.log('I');
    });

    test('Test 2', async () => {
      console.log('J');
    });
  });
});