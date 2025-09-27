import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    //  baseURL: 'https://jsonplaceholder.typicode.com', // API base
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  testDir: './tests',
  reporter: [['list']],
});