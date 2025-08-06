import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())


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
authCors: process.env.AUTH_CORS || "*",

    },
  },
})
