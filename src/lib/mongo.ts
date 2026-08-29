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
  /** Industry vertical from the Domain dropdown (Healthcare, FinTech, …). */
  domain: string | null;
  /** Selected track/interest from the "What are you interested in?" dropdown. */
  service: string | null;
  /** Service pillars selected via checkboxes (UI Infrastructure, AI Optimization, etc.). */
  pillars: string[] | null;
  /** Description of Business textarea. */
  businessDescription: string | null;
  /** Current Pain Points textarea. */
  painPoints: string | null;
  /**
   * Human-readable composite of the structured fields above. Kept so the /admin
   * viewer and the Resend notification can render one block without knowing the
   * individual fields.
   */
  message: string;
  createdAt: Date;
}
