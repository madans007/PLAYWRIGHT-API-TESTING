// using a public test API that supports Basic Authentication - https://httpbin.org/basic-auth/user/passwd
import { test, expect, APIResponse, request, APIRequestContext } from '@playwright/test';

test.describe('Basic Auth API Test', () => {

    test('Successfull Authentication with Valid Cred', async () => {

        const context: APIRequestContext = await request.newContext({
            httpCredentials: {
                username: 'user',
                password: 'passwd',
            }
        });

        const response: APIResponse = await context.get('https://httpbingo.org/basic-auth/user/passwd');
        expect(response.status()).toBe(200);

        const responseBody: any = await response.json();
        console.log(responseBody);

        expect(responseBody.authorized).toBeTruthy();
        expect(responseBody.user).toBe('user');

    });

    test('Failed Authentication with Invalid Cred', async () => {
        const context: APIRequestContext = await request.newContext({
            httpCredentials: {
                username: 'user',
                password: 'wrong'
            }
        });

        const response: APIResponse = await context.get('https://httpbingo.org/basic-auth/user/passwd');
        expect(response.status()).toBe(401);
    });
});