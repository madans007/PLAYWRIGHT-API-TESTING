import { test, expect, request, APIRequestContext } from '@playwright/test';

test.describe('Bearer Token Authentication (FakeStore API)', () => {

    test('Login and access protected resource with Bearer Token', async () => {

        // Step 1, Login and get token
        const loginContext: APIRequestContext = await request.newContext();
        const loginResponse = await loginContext.post('https://fakestoreapi.com/auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username: 'mor_2314',
                password: '83r5^_',
            },
        });

        //console.log('Login Status:', loginResponse.status());
        const loginBody = await loginResponse.json();
        console.log('Login Response:', loginBody);
        expect([200, 201]).toContain(loginResponse.status());       // Accept either 200 or 201 as success
        expect(loginBody.token, 'Token not found in login response').toBeTruthy();

        const token = loginBody.token;

        // Step 2, Use Bearer token in Authorization header
        const protectedContext = await request.newContext({
            extraHTTPHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });

        const protectedResponse = await protectedContext.get('https://fakestoreapi.com/carts/user/2');
        console.log('Protected Status:', protectedResponse.status());
        const protectedBody = await protectedResponse.json();
        console.log('Protected Response:', protectedBody);

        expect(protectedResponse.status()).toBe(200);
        expect(Array.isArray(protectedBody)).toBeTruthy();          // returns list of carts
    });
});
