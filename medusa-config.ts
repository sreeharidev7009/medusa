import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv()

export default defineConfig({
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres", // ✅ correct key
    database_extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    http: {
      store_cors: process.env.STORE_CORS || "*",
      admin_cors: process.env.ADMIN_CORS || "*",
    },
  },
})
