import { sql, ensureTable } from '@/lib/db';
import { createPost } from './actions';

export const dynamic = 'force-dynamic';

function formatDate(d) {
  return new Date(d).toLocaleString('id-ID', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
  });
}

export default async function Home() {
  await ensureTable();
  const posts = await sql`
    SELECT id, author, title, body, created_at
    FROM posts
    ORDER BY created_at DESC
    LIMIT 50`;

  return (
    <main className="wrap">
      <header className="head">
        <h1>Papan Tulis</h1>
        <p>Tulis sesuatu, langsung tampil untuk semua orang.</p>
      </header>

      <div className="grid">
        <form action={createPost} className="composer">
          <h2>Tulis postingan</h2>
          <label>
            Nama
            <input name="author" maxLength={40} required placeholder="Namamu" />
          </label>
          <label>
            Judul
            <input name="title" maxLength={120} required placeholder="Judul singkat" />
          </label>
          <label>
            Isi
            <textarea name="body" rows={6} maxLength={2000} required placeholder="Apa yang ingin kamu bagikan?" />
          </label>
          <button type="submit">Terbitkan</button>
        </form>

        <section className="feed" aria-label="Daftar postingan">
          {posts.length === 0 ? (
            <p className="empty">Belum ada postingan. Tulis yang pertama di formulir.</p>
          ) : (
            posts.map((p) => (
              <article key={p.id} className="post">
                <h3>{p.title}</h3>
                <p className="body">{p.body}</p>
                <p className="meta">
                  {p.author}, {formatDate(p.created_at)}
                </p>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
