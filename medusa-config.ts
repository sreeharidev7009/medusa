import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv()

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // ✅ This is enough
    databaseExtra: {
      ssl: {
        rejectUnauthorized: false, // Required for Render/Railway
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
    },
  },
})
