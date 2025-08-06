import { loadEnv, defineConfig } from "@medusajs/framework/utils"

// Load env variables
loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseType: "postgres",
    databaseExtra: {
      ssl: {
        rejectUnauthorized: false, // Required for Railway SSL
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
    },
  },
})
