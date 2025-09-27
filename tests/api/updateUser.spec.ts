import { test, expect, APIResponse } from '@playwright/test';
import { getRandomUser } from '../../utils/dataProvider';



test.describe('JSON Placeholder API- Update User', () => {

    test('Update User with PUT', async ({ request }) => {

        const userId: number = 1;     //predefined user

        const updateUserPayload = getRandomUser();      // lets update payload for that user
        const updatedUserResponse: APIResponse = await request.put(`https://jsonplaceholder.typicode.com/users/${userId}`, { data: updateUserPayload });

        expect(updatedUserResponse.status()).toBe(200);

        const updatedUserResponseBody:any = await updatedUserResponse.json();   // you'll get body here

        expect(updatedUserResponseBody).toHaveProperty('name', updateUserPayload.name);
        expect(updatedUserResponseBody).toHaveProperty('email', updateUserPayload.email);
    

    })
})