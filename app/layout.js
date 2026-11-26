import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const text = Newsreader({ subsets: ['latin'], variable: '--font-text' });

export const metadata = {
  title: 'Papan Tulis',
  description: 'Tulis dan bagikan postinganmu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${text.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
