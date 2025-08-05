import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL, // ✅ Correct key name
    database_type: "postgres",              // ✅ Must explicitly specify
    database_extra: {
      ssl: {
        rejectUnauthorized: false,          // ✅ Required for Render Postgres
      },
    },
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: [
    {
      resolve: "./src/modules/loyalty",
    },
  ],
});
