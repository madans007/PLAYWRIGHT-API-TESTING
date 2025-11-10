import { test, expect, request, APIResponse, APIRequestContext } from '@playwright/test';

test.describe('OAuth2 - Simulated Client Credentials Flow (FakeStore API)', () => {

    test('Get access token and access protected resource', async () => {
        const context: APIRequestContext = await request.newContext();

        // first simulate OAuth login to get JWT token
        const loginResponse: APIResponse = await context.post('https://fakestoreapi.com/auth/login', {
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: 'mor_2314',
                password: '83r5^_',   
            },
        });

        console.log('Login Status:', loginResponse.status());
        const loginBody: any = await loginResponse.json();
        console.log('Login Body:', loginBody);
        expect([200, 201]).toContain(loginResponse.status());
        expect(loginBody.token, 'Token not found in response').toBeTruthy();

        const accessToken: any = loginBody.token;

        // Now use token to access protected resource
        const protectedResponse: APIResponse = await context.get('https://fakestoreapi.com/carts/user/2', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        console.log('Protected Status:', protectedResponse.status());
        const protectedBody: any = await protectedResponse.json();
        console.log('Protected Body:', protectedBody);
        expect(protectedResponse.status()).toBe(200);
        expect(Array.isArray(protectedBody)).toBeTruthy();
    });
});
