'use server';

import { revalidatePath } from 'next/cache';
import { sql, ensureTable } from '@/lib/db';

export async function createPost(formData) {
  const author = String(formData.get('author') || '').trim().slice(0, 40);
  const title = String(formData.get('title') || '').trim().slice(0, 120);
  const body = String(formData.get('body') || '').trim().slice(0, 2000);

  if (!author || !title || !body) return;

  await ensureTable();
  await sql`INSERT INTO posts (author, title, body) VALUES (${author}, ${title}, ${body})`;
  revalidatePath('/');
}
