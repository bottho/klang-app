import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    env: {
      NODE_ENV: "development",
    },
  },
  use: {
    baseURL: "http://localhost:3000",
  },
  testDir: "e2e",
};

export default config;
