-- Struktur database. Jalankan sekali di SQL Editor Neon
-- (atau biarkan aplikasi membuatnya otomatis lewat lib/db.js).
CREATE TABLE IF NOT EXISTS posts (
  id         SERIAL PRIMARY KEY,
  author     VARCHAR(40)  NOT NULL,
  title      VARCHAR(120) NOT NULL,
  body       TEXT         NOT NULL,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_created_at_idx ON posts (created_at DESC);
