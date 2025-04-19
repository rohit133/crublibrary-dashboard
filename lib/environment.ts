
// Environment variables helper for compatibility with Next.js style imports

const env = {
  CRUD_API_KEY: process.env.NEXT_CRUD_API_KEY || '',
  CRUD_API_URL: process.env.NEXT_CRUD_API_URL || '',
  APP_URL: process.env.NEXT_APP_URL || 'http://localhost:8080',
};

export default env;
