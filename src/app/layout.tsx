import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from 'components/footer';
import { BgVideo } from 'components/bg-video';

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
