import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    database_extra: {
      ssl: {
        rejectUnauthorized: false, // ✅ Required for Render Postgres SSL
      },
    },
    http: {
      store_cors: process.env.STORE_CORS || "*",
      admin_cors: process.env.ADMIN_CORS || "*",
      auth_cors: process.env.AUTH_CORS || "*",
      jwt_secret: process.env.JWT_SECRET || "supersecret",
      cookie_secret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
});
