import {test as base} from '@playwright/test';
import { UserClient } from '../apiClients/UserClient';

type APIFixtures = {
    userClient: UserClient;
};

export const test = base.extend<APIFixtures>({
    userClient: async ({request}, use) =>{
        await use(new UserClient(request));
    },
})