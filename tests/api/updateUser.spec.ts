import { test, expect, APIResponse } from '@playwright/test';
import { getRandomUser } from '../../utils/dataProvider';



test.describe('JSON Placeholder API- Update User', () => {

    test('Update User with PUT', async ({ request }) => {

        const userId: number = 1;     //predefined user

        const updateUserPayload = getRandomUser();      // lets update payload for that user
        const updatedUserResponse: APIResponse = await request.put(`https://jsonplaceholder.typicode.com/users/${userId}`, { data: updateUserPayload });
        expect(updatedUserResponse.status()).toBe(200);

        const updatedUserResponseBody: any = await updatedUserResponse.json();   // body
        expect(updatedUserResponseBody).toHaveProperty('name', updateUserPayload.name);
        expect(updatedUserResponseBody).toHaveProperty('email', updateUserPayload.email);

    })


    test('Partial update user with PATCH', async ({ request }) => {

        const userIdTwo: number = 2;

        const partilaUpdate: any = { email: 'patched@example.com' };
        const patchResponse:APIResponse= await request.patch(`https://jsonplaceholder.typicode.com/users/${userIdTwo}`, { data: partilaUpdate })
        expect(patchResponse.status()).toBe(200);

        const patchResponseBody: any = await patchResponse.json();
        console.log('Patched User:', patchResponseBody);
        expect(patchResponseBody).toHaveProperty('email', "patched@example.com");
    })
})