import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
   databaseUrl: process.env.DATABASE_URL, // ✅ camelCase key
    databaseType: "postgres",
    databaseExtra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*", // ✅ REQUIRED FIELD
    },
  },
});
