import { test, expect, APIResponse } from '@playwright/test';
import { getRandomUser, getJsonUser } from '../../utils/dataProvider';


test.describe('JSONPlaceholder API - Create User', () => {

    test('Create User with Faker (dynamic)', async ({ request }) => {
        const payload:any = getRandomUser();

        const response:APIResponse = await request.post('https://jsonplaceholder.typicode.com/users', { data: payload });
        expect(response.status()).toBe(201);        //accepted

        const body = await response.json();             //body can be wriiten as responseBody as well
        console.log('Created User (Faker):', body);
        expect(body).toHaveProperty('id');
    })

    test('Create User with Static JSON', async ({ request }) => {
        const payload = getJsonUser();

        const response:APIResponse = await request.post('https://jsonplaceholder.typicode.com/users', { data: payload });
        expect(response.status()).toBe(201);        

        const body = await response.json();
        console.log('Created User (Static JSON):', body);
        expect(body).toHaveProperty('id');
    });

})



