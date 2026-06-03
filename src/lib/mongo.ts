import { MongoClient, type Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const DB_NAME = 'adl_website';

export async function getDb(): Promise<Db> {
  if (cachedDb) return cachedDb;

  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('DATABASE_URL is not set');
  }

  const client = cachedClient ?? new MongoClient(uri);
  if (!cachedClient) {
    await client.connect();
    cachedClient = client;
  }

  cachedDb = client.db(DB_NAME);
  return cachedDb;
}

export interface ContactDoc {
  name: string;
  email: string;
  company: string | null;
  message: string;
  createdAt: Date;
}
