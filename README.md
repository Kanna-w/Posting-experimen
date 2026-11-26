# Papan Tulis

Web posting sederhana: Next.js + Postgres (Neon), siap di-deploy ke Vercel.

## Jalankan lokal
1. `npm install`
2. Salin `.env.example` menjadi `.env.local`, isi `DATABASE_URL` dari Neon.
3. `npm run dev` lalu buka http://localhost:3000

## Deploy ke Vercel
1. Upload project ke GitHub.
2. Di Vercel: Add New > Project > pilih repo > Deploy.
3. Buka tab **Storage** di project > **Create Database** > pilih **Neon** > Connect.
   Vercel otomatis mengisi `DATABASE_URL`.
4. **Redeploy** agar variabel terbaca. Tabel `posts` dibuat otomatis saat halaman pertama dibuka.
