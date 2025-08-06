import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // ✅ Correct key
    databaseType: "postgres",
    driverOptions: {
      ssl: {
        rejectUnauthorized: false, // ✅ Required for Render/Heroku/DigitalOcean managed DB
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || "*", // ✅ Storefront CORS
      adminCors: process.env.ADMIN_CORS || "*", // ✅ Admin CORS
      authCors: process.env.AUTH_CORS || "*",   // ✅ Auth CORS (Required in some cases)
    },
  },
});
