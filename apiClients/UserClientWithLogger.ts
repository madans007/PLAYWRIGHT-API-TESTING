import { APIRequestContext, APIResponse } from "@playwright/test";
import { BASE_URL } from '../utils/env';
import chalk from 'chalk';

export class UserClientWithLogger {
    constructor(private request: APIRequestContext) {

    }

    // Logger function
    private async logRequest(method: string, url: string, response: APIResponse, startTime: number) {
        const status: number = response.status();
        const duration: number = Date.now() - startTime;
        const timestamp: string = new Date().toISOString();
        console.log(
            `${chalk.gray(`[${timestamp}]`)} ${chalk.cyan(`[${method}]`)} ${chalk.yellow(url)} → ${chalk.green(status)} ${chalk.white(`(${duration}ms)`)}`
        );
    }

    async getUser(userId: number): Promise<APIResponse> {
        const url: string = `${BASE_URL}/users/${userId}`;
        const startTime: number  = Date.now();
        const response: APIResponse = await this.request.get(url);
        await this.logRequest('GET', url, response, startTime);
        return response;
    }

    async createUser(payload: any): Promise<APIResponse> {
        const url: string = `${BASE_URL}/users`;
        const startTime: number  = Date.now();
        const response: APIResponse = await this.request.post(url, { data: payload });
        await this.logRequest('POST', url, response, startTime);
        return response;
    }

    async updateUser(userId: number, updateUserPayload: any): Promise<APIResponse> {
        const url: string = `${BASE_URL}/users/${userId}`;
        const startTime: number  = Date.now();
        const response: APIResponse = await this.request.put(url, { data: updateUserPayload });
        await this.logRequest('PUT', url, response, startTime);
        return response;
    }

    async patchUser(userId: number, partialUpdate: any): Promise<APIResponse> {
        const url: string = `${BASE_URL}/users/${userId}`;
        const startTime: number  = Date.now();
        const response: APIResponse = await this.request.patch(url, { data: partialUpdate });
        await this.logRequest('PATCH', url, response, startTime);
        return response;
    }

    async deleteUser(userId: number): Promise<APIResponse> {
        const url: string = `${BASE_URL}/users/${userId}`;
        const startTime: number  = Date.now();
        const response: APIResponse = await this.request.delete(url);
        await this.logRequest('DELETE', url, response, startTime);
        return response;
    }
}
