import { APIRequestContext, APIResponse } from "@playwright/test";
import { BASE_URL } from '../utils/env';


export class UserClient {

    constructor(private request: APIRequestContext) {

    }

    async getUser(predefinedUserId: number): Promise<APIResponse> {
        return this.request.get(`${BASE_URL}/users/${predefinedUserId}`);
    }

    async createUser(payload: any): Promise<APIResponse> {
        return this.request.post(`${BASE_URL}/users`, { data: payload });
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