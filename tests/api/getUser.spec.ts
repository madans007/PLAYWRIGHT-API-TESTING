import { test, expect, APIResponse } from '@playwright/test';
import { getRandomUser, getJsonUser } from '../../utils/dataProvider';

const predefinedUserId = 1; // JSONPlaceholder predefined user

test.describe('JSONPlaceholder API - Get User', () => {

    // Test for predefined user
    test('Get User by ID', async ({ request }) => {
        const response: APIResponse = await request.get(`https://jsonplaceholder.typicode.com/users/${predefinedUserId}`);
        expect(response.status()).toBe(200);

        const body: any = await response.json();
        console.log('Fetched Predefined User:', body);
        expect(body).toHaveProperty('id', predefinedUserId);
    });

/*

    //Note- JSONPlaceholder has 10 predefined users with IDs 1 through 10.

    When you POST a new user:
    The server does not store it, it just fakes the response.
    It always returns an id starting from 101, regardless of what IDs exist in the GET endpoint.
    IDs 11–100 are not used for fake POST responses — they decided 101+ to clearly distinguish faked users from predefined ones.

    // Test for dynamic creation and retrieval

    test('Create and Get User dynamically', async ({ request }) => {
        // Create User using Faker
        const newUserPayload: any = getRandomUser();
        const createResponse: APIResponse = await request.post(
            'https://jsonplaceholder.typicode.com/users',
            { data: newUserPayload }
        );
        expect(createResponse.status()).toBe(201);

        const createdUser: any = await createResponse.json();
        console.log('Created User:', createdUser);

        // Get the same user by ID
        const newUserId = createdUser.id; // dynamically retrieved ID
        const getResponse: APIResponse = await request.get(`https://jsonplaceholder.typicode.com/users/${newUserId}`);
        expect(getResponse.status()).toBe(200);

        const fetchedUser: any = await getResponse.json();
        console.log('Fetched User:', fetchedUser);

        // Assertions
        expect(fetchedUser).toHaveProperty('id', newUserId);
        expect(fetchedUser).toHaveProperty('name', newUserPayload.name);
    });
*/
});
