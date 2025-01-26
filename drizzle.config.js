/** @type {import("drizzle-kit").Config} */
export default {
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_8kwcQzZKO7uW@ep-summer-dream-a8ywqfcf-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  }
};

