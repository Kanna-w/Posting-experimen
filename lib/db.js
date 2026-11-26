import { neon } from '@neondatabase/serverless';

let client;

// Koneksi dibuat saat query dijalankan, bukan saat file di-import,
// supaya proses build di Vercel tidak error walau DATABASE_URL belum ada.
export function sql(strings, ...values) {
  if (!client) {
    client = neon(process.env.DATABASE_URL);
  }
  return client(strings, ...values);
}

let ready;
// Membuat tabel jika belum ada (hanya dijalankan sekali per instance server).
export function ensureTable() {
  if (!ready) {
    ready = sql`
      CREATE TABLE IF NOT EXISTS posts (
        id         SERIAL PRIMARY KEY,
        author     VARCHAR(40)  NOT NULL,
        title      VARCHAR(120) NOT NULL,
        body       TEXT         NOT NULL,
        created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      )`;
  }
  return ready;
}
