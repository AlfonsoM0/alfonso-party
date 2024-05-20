import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BgVideo, Footer } from 'components';
import { getAllVip } from 'firebase';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alfonso | Fiesta Retro',
  description: 'Te invito a mi cumpleaños.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const vips = await getAllVip();
  const vipsUrls = vips.map((vip) => `/${encodeURIComponent(vip.guest)}`);

  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <BgVideo vipsUrls={vipsUrls} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
