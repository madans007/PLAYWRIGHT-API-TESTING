import { test } from '../../fixtures/baseTest';
import { APIResponse, expect } from '@playwright/test';

const predefinedUserId = 1; // JSONPlaceholder predefined user

test.describe('JSONPlaceholder API - Get User Refactored', () => {

    // Test for predefined user
    test('Get User by ID Refactored', async ({ userClient }) => {
        const response: APIResponse = await userClient.getUser(1);
        const body: any = await response.json();
        console.log('Fetched Predefined User:', body);
        expect(body).toHaveProperty('id', predefinedUserId);
    });
});