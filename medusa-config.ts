import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(); // or `loadEnv(process.env.NODE_ENV || "development", process.cwd())`

export default defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres", // ✅ Correct key
    database_extra: {
      ssl: {
        rejectUnauthorized: false, // Useful for Render/Railway
      },
    },
    http: {
      store_cors: process.env.STORE_CORS || "*",
      admin_cors: process.env.ADMIN_CORS || "*",
    },
  },
});
