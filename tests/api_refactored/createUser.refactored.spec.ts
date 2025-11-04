import { test } from '../../fixtures/baseTest';
import { APIResponse, expect } from '@playwright/test';
import { getRandomUser, getJsonUser } from '../../utils/dataProvider';
import { createUserSchema } from '../../schemas/createUserSchema';
import { validateSchema } from '../../utils/validator';


test.describe('JSONPlaceholder API - Create User Refactored', () => {

    test('Create User with Faker (dynamic) Refactored', async ({ userClientWithLogger }) => {
        const payload: any = getRandomUser();

        const response: APIResponse = await userClientWithLogger.createUser(payload);
        expect(response.status()).toBe(201);             //accepted

        const body = await response.json();             
        console.log('Created User (Faker):', body);
        expect(body).toHaveProperty('id');

        expect(validateSchema(createUserSchema, body)).toBeTruthy();    //schema val

    })

    test.only('Create User with Static JSON Refactored', async ({ userClientWithLogger }) => {
        const payload: any = getJsonUser();

        const response: APIResponse = await userClientWithLogger.createUser(payload);
        expect(response.status()).toBe(201);

        const body = await response.json();
        console.log('Created User (Static JSON):', body);
        expect(body).toHaveProperty('id');              //toHaveProperty is a Jest-style matcher

        expect(validateSchema(createUserSchema, body)).toBeTruthy();  
    });

})
