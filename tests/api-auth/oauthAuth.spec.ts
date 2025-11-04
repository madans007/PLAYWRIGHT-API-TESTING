import { test, expect, request } from '@playwright/test';

test.describe('OAuth2 - Client Credentials Flow (Postman Echo)', () => {

    test('Get access token and access protected resource', async () => {

        const clientId = 'postman-client';
        const clientSecret = 'postman-secret';
        const basicAuth: string = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        const context = await request.newContext();
        const tokenResponse = await context.post('https://postman-echo.com/oauth2/token', {
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            form: { grant_type: 'client_credentials' },
        });

        console.log('Token Response Status:', tokenResponse.status());
        expect(tokenResponse.status()).toBe(200);
        const tokenData: any = await tokenResponse.json();
        console.log('Token Data:', tokenData);
        const accessToken: any = tokenData.access_token;
        expect(accessToken).toBeTruthy();

        // using bearer token to access protected endpoint
        const protectedResponse = await context.get('https://postman-echo.com/protected', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        console.log('Protected Status:', protectedResponse.status());
        const protectedData = await protectedResponse.text();
        console.log('Protected Data:', protectedData);
        expect(protectedResponse.status()).toBe(200);

    });
});


//OAuth2 

// Sends client_id + client_secret (via Basic Auth)
// Gets a fake OAuth2 token from Postman Echo
// Calls /protected endpoint using Bearer <token>
// Verifies it all works — no signup required