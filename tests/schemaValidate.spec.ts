import {test, expect, request} from "@playwright/test";
import Ajv from 'ajv';

test('Schema validation against json', async({request})=>
{
    const response = await request.get("https://mocktarget.apigee.net/json");
    const responseBody = await response.json();
    console.log(responseBody);

    const schema = {

    "type": "object",
    "properties": {
        "firstName": {
        "type": "string"
        },
        "lastName": {
        "type": "string"
        },
        "city": {
        "type": "string"
        },
        "state": {
        "type": "string"
        }
    },
    "required": [
        "firstName",
        "lastName",
        "city",
        "state"
    ]

   }

   const ajv = new Ajv();
   const validate = ajv.compile(schema);

   const isValid = validate(responseBody);
   expect(isValid).toBeTruthy();



})