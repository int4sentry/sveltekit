import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    sveltekit(),
    sentryVitePlugin({
      org: "org2-w7",
      project: "javascript-sveltekit",

      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and need `project:releases` and `org:read` scopes
      authToken:
        "21a0be516db1412ea708d6a852906cd898899c4aaea348f689b824b17871fec8",
      telemetry: false,
    }),
  ],
});
