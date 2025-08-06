import { loadEnv, defineConfig } from "@medusajs/framework/utils"

// Load environment variables from `.env`
loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // PostgreSQL URL from Railway
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
    },
  },
})

