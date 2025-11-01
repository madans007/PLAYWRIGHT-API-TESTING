import { test } from '../../fixtures/baseTest';
import { APIResponse, expect } from '@playwright/test';
import { getRandomUser } from '../../utils/dataProvider';
import { updateUserSchema, updateUserPartialSchema } from '../../schemas/updateUserSchema';
import { validateSchema } from '../../utils/validator';


test.describe('JSON Placeholder API- Update User Refactored', () => {

    test('Update User with PUT Refactored', async ({ userClient }) => {

        const updateUserPayload = getRandomUser();                       // lets update payload for that user
        const updatedUserResponse: APIResponse = await userClient.updateUser(1, updateUserPayload);

        expect(updatedUserResponse.status()).toBe(200);

        const updatedUserResponseBody: any = await updatedUserResponse.json();   // body
        expect(updatedUserResponseBody).toHaveProperty('name', updateUserPayload.name);
        expect(updatedUserResponseBody).toHaveProperty('email', updateUserPayload.email);

        expect(validateSchema(updateUserSchema, updatedUserResponseBody)).toBeTruthy();
    })

    test('Partial update user with PATCH Refactored', async ({ userClientWithLogger }) => {

        const userIdTwo: number = 2;

        const partilaUpdate: any = { email: 'patched@example.com' };
        const patchResponse: APIResponse = await userClientWithLogger.patchUser(2, partilaUpdate);
        expect(patchResponse.status()).toBe(200);

        const patchResponseBody: any = await patchResponse.json();
        console.log('Patched User:', patchResponseBody);
        expect(patchResponseBody).toHaveProperty('email', "patched@example.com");

        expect(validateSchema(updateUserPartialSchema, patchResponseBody)).toBeTruthy();
    })

})
