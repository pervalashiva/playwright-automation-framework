# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: schemaValidate.spec.ts >> Schema validation against json
- Location: tests/schemaValidate.spec.ts:5:5

# Error details

```
Error: schema is invalid: data/properties/lastName/type must be equal to one of the allowed values, data/properties/lastName/type must be array, data/properties/lastName/type must match a schema in anyOf
```

# Test source

```ts
  1  | import {test, expect, request} from "@playwright/test";
  2  | import Ajv from 'ajv';
  3  | 
  4  | 
  5  | test('Schema validation against json', async({request})=>
  6  | {
  7  | 
  8  |     const response = await request.get("https://mocktarget.apigee.net/json");
  9  |     const responseBody = await response.json();
  10 |     console.log(responseBody);
  11 | 
  12 |     const schema = {
  13 | 
  14 |     "type": "object",
  15 |     "properties": {
  16 |         "firstName": {
  17 |         "type": "string"
  18 |         },
  19 |         "lastName": {
  20 |         "type": Number
  21 |         },
  22 |         "city": {
  23 |         "type": "string"
  24 |         },
  25 |         "state": {
  26 |         "type": "string"
  27 |         }
  28 |     },
  29 |     "required": [
  30 |         "firstName",
  31 |         "lastName",
  32 |         "city",
  33 |         "state"
  34 |     ]
  35 | 
  36 |    }
  37 | 
  38 |    const ajv = new Ajv();
> 39 |    const validate = ajv.compile(schema);
     |                         ^ Error: schema is invalid: data/properties/lastName/type must be equal to one of the allowed values, data/properties/lastName/type must be array, data/properties/lastName/type must match a schema in anyOf
  40 | 
  41 |    const isValid = validate(responseBody);
  42 |    expect(isValid).toBeTruthy();
  43 | 
  44 | 
  45 | 
  46 | })
```