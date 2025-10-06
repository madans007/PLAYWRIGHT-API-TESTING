import {test as base} from '@playwright/test';
import { UserClient } from '../apiClients/UserClient';
import {UserClientWithLogger} from '../apiClients/UserClientWithLogger';

type APIFixtures = {
    userClient: UserClient;                                     // this is optional, if you use loggerone in tests
    userClientWithLogger: UserClientWithLogger;
};

export const test = base.extend<APIFixtures>({
    userClient: async ({request}, use) =>{                      // this is optional, if you use loggerone in tests
        await use(new UserClient(request));
    },
    userClientWithLogger: async ({request}, use) =>{
        await use(new UserClientWithLogger(request));
    },
})