import { test } from '../../fixtures/baseTest';
import { APIResponse, expect } from '@playwright/test';



test.describe('JSON Placeholder API - Delete User Refactored', async () => {

    test('Delete User by ID Refactored', async ({ userClientWithLogger }) => {

        const userId: number = 1;    // this is predefined user
        const deleteResponse: APIResponse = await userClientWithLogger.deleteUser(1);
        expect(deleteResponse.status()).toBe(200);

    })

})
