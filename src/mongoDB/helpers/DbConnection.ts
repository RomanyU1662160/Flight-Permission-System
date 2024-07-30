import mongoose from 'mongoose';

const DBConfig = {
  DB_URL: process.env.DB_URL,
  DB_USER: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

let cachedDb: mongoose.Connection | null = null;

console.log('DBConfig', DBConfig);
export const connectToDB = async () => {
  if (cachedDb) {
    console.log('Connected to Cached DB');
    return cachedDb;
  }
  try {
    const DB_HOST = `mongodb+srv://${DBConfig.DB_USER}:${DBConfig.DB_PASSWORD}${DBConfig.DB_URL}`;

    const db = await mongoose.connect(DB_HOST);
    console.log('Connected to DB');
    cachedDb = db.connection;
    return cachedDb;
  } catch (error) {
    console.log('error:::>>>', error);
    process.exit(1);
  }
};
