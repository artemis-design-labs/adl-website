import { getDb, type ContactDoc } from '@/lib/mongo';
import type { WithId } from 'mongodb';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function AdminPage() {
  let contacts: WithId<ContactDoc>[] = [];
  let dbError: string | null = null;

  try {
    const db = await getDb();
    contacts = await db
      .collection<ContactDoc>('contacts')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
  } catch (err) {
    dbError = err instanceof Error ? err.message : 'Unknown error';
    console.error('Admin page DB error:', err);
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Contacts</h1>

      {dbError && (
        <div className="mb-6 p-4 rounded-lg border border-amber-300 bg-amber-50 text-amber-900">
          <p className="font-semibold mb-1">Database unavailable</p>
          <p className="text-sm mb-3">
            MongoDB is unreachable ({dbError}). All form submissions are still captured
            via email — check <strong>itadmin@artemisdesignlabs.com</strong> for incoming leads.
          </p>
          <p className="text-xs text-amber-700">
            Fix: go to MongoDB Atlas → Network Access → add <code>0.0.0.0/0</code> to allow
            connections from Cloudflare Workers.
          </p>
        </div>
      )}

      {!dbError && contacts.length === 0 && (
        <p className="text-gray-600">No submissions yet.</p>
      )}

      {contacts.map((c) => (
        <div key={c._id.toString()} className="border-b py-4">
          <strong>{c.name}</strong> ({c.email})
          {c.company ? <> — <em>{c.company}</em></> : null}
          {c.domain ? <p className="text-sm text-gray-500 mt-0.5">Domain: {c.domain}</p> : null}
          {c.pillars?.length ? (
            <p className="text-sm text-gray-500 mt-0.5">Pillars: {c.pillars.join(', ')}</p>
          ) : null}
          <p className="whitespace-pre-wrap mt-2 text-sm">{c.message}</p>
          <small className="text-gray-500">
            {new Date(c.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}
