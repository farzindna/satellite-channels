import { neon } from '@neondatabase/serverless';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8'
};

const sql = neon(process.env.DATABASE_URL);

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS channels (
      id SERIAL PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      category TEXT,
      url TEXT NOT NULL,
      logo TEXT,
      position INT
    )
  `;
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  try {
    await ensureTable();

    if (event.httpMethod === 'GET') {
      const rows = await sql`SELECT name, category, url, logo, position FROM channels ORDER BY position NULLS LAST, name`;
      return { statusCode: 200, headers, body: JSON.stringify(rows) };
    }

    if (event.httpMethod === 'POST') {
      const body = event.body ? JSON.parse(event.body) : {};
      const { action } = body || {};

      if (action === 'upsert') {
        const { data, oldName } = body;
        if (!data || !data.name || !data.url) {
          return { statusCode: 400, headers, body: JSON.stringify({ error: 'invalid payload' }) };
        }
        if (oldName && oldName !== data.name) {
          await sql`UPDATE channels SET name = ${data.name}, category=${data.category}, url=${data.url}, logo=${data.logo} WHERE name = ${oldName}`;
        } else {
          await sql`
            INSERT INTO channels (name, category, url, logo)
            VALUES (${data.name}, ${data.category}, ${data.url}, ${data.logo})
            ON CONFLICT (name) DO UPDATE SET
              category = EXCLUDED.category,
              url = EXCLUDED.url,
              logo = EXCLUDED.logo
          `;
        }
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
      }

      if (action === 'bulkUpsert') {
        const { list } = body;
        if (!Array.isArray(list)) {
          return { statusCode: 400, headers, body: JSON.stringify({ error: 'list required' }) };
        }
        for (const item of list) {
          if (!item || !item.name || !item.url) continue;
          await sql`
            INSERT INTO channels (name, category, url, logo)
            VALUES (${item.name}, ${item.category}, ${item.url}, ${item.logo})
            ON CONFLICT (name) DO UPDATE SET
              category = EXCLUDED.category,
              url = EXCLUDED.url,
              logo = EXCLUDED.logo
          `;
        }
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
      }

      if (action === 'delete') {
        const { name } = body;
        if (!name) return { statusCode: 400, headers, body: JSON.stringify({ error: 'name required' }) };
        await sql`DELETE FROM channels WHERE name = ${name}`;
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
      }

      if (action === 'reorder') {
        const { order } = body; // array of names in final order
        if (!Array.isArray(order)) return { statusCode: 400, headers, body: JSON.stringify({ error: 'order array required' }) };
        for (let i = 0; i < order.length; i++) {
          await sql`UPDATE channels SET position = ${i} WHERE name = ${order[i]}`;
        }
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
      }

      return { statusCode: 400, headers, body: JSON.stringify({ error: 'unknown action' }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'method not allowed' }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
  }
}

