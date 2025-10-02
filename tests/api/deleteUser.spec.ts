import {test,expect, APIResponse} from '@playwright/test';


test.describe('JSON Placeholder API - Delete User', async()=>{

    test('Delete User by ID', async({request})=>{

        const userId:number = 1;    // this is predefined user

        const deleteResponse: APIResponse= await request.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)

        expect(deleteResponse.status()).toBe(200);

    })

})