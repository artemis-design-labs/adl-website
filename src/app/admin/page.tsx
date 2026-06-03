import { getDb, type ContactDoc } from '@/lib/mongo';
import type { WithId } from 'mongodb';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function AdminPage() {
  const db = await getDb();
  const contacts: WithId<ContactDoc>[] = await db
    .collection<ContactDoc>('contacts')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Contacts</h1>
      {contacts.length === 0 ? (
        <p className="text-gray-600">No submissions yet.</p>
      ) : (
        contacts.map((c) => (
          <div key={c._id.toString()} className="border-b py-4">
            <strong>{c.name}</strong> ({c.email})
            {c.company ? <> — <em>{c.company}</em></> : null}
            <p className="whitespace-pre-wrap mt-1">{c.message}</p>
            <small className="text-gray-600">
              {new Date(c.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}
