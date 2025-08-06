import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(); // Automatically loads .env

export default defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL, // ✅ correct
    database_extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    http: {
      store_cors: process.env.STORE_CORS || "*",
      admin_cors: process.env.ADMIN_CORS || "*",
    },
  },
  modules: {
    // your modules here
  },
});
