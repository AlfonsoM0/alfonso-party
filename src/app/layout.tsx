import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alfonso | Fiesta Retro',
  description: 'Te invito a mi cumpleaños.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-5 left-5 text-xs flex flex-col">
          <p>By Alfonso Montes de Oca</p>
          <small>© 2024</small>
        </footer>
      </body>
    </html>
  );
}
