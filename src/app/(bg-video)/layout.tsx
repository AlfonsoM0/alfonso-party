import { BgVideo, Footer } from 'components';
import { getAllVip } from 'firebase';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const vips = await getAllVip();
  const vipsUrls = vips.map((vip) => `/${encodeURIComponent(vip.guest)}`);

  return (
    <>
      <BgVideo vipsUrls={vipsUrls} />
      {children}
      <Footer />
    </>
  );
}
