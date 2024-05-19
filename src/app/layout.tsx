import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BgVideo, Footer } from 'components';

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
        <BgVideo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
