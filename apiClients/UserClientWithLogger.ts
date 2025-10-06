import { APIRequestContext, APIResponse } from "@playwright/test";
import { BASE_URL } from '../utils/env';


export class UserClientWithLogger {

    constructor(private request: APIRequestContext) {

    }

    private async logRequest(method:string, url:string, response:APIResponse){      //logger function
        const status: number = response.status();
        console.log(`[${method}] ${url} ${status}`);
    }

    async getUser(predefinedUserId: number): Promise<APIResponse> {

        const url:string = `${BASE_URL}/users/${predefinedUserId}`;
        const response: APIResponse= await this.request.get(url);
        await this.logRequest('GET', url, response);
        return response;
    }

    async createUser(payload: any): Promise<APIResponse> {

        const url:string = `${BASE_URL}/users`;
        const response: APIResponse= await this.request.post(url , { data: payload });
        await this.logRequest('POST', url, response);
        return response;

    }

    async updateUser(userId: number, updateUserPayload: any): Promise<APIResponse> {
        return this.request.put(`${BASE_URL}/users/${userId}`, { data: updateUserPayload });
    }

    async patchUser(userIdTwo: number, partilaUpdate: any): Promise<APIResponse> {
        return this.request.patch(`${BASE_URL}/users/${userIdTwo}`, { data: partilaUpdate });
    }

    async deleteUser(userId: number): Promise<APIResponse> {
        return this.request.delete(`${BASE_URL}/users/${userId}`);
    }
}