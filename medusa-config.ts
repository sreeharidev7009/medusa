import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    database_extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*", // ✅ Add this line
    },
  },
});
