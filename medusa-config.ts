import { loadEnv, defineConfig } from "@medusajs/framework/utils"

// Load env variables from `.env` or Railway config
loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // PostgreSQL connection string from Railway

    // ✅ Required for Railway PostgreSQL
    driverOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },

    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
    },
  },
})
