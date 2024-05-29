import { BgVideo } from 'components/bg-video';
import { Footer } from 'components/footer';
import { GuestNav } from 'components/guest-nav';
import { SectionOrganizer } from 'components/section-organizer';
import { getAllVip } from 'firebase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alfonso | Lugar',
  description: 'Lugar del Evento',
};

export default async function Page() {
  const vips = await getAllVip();
  const vipsUrls = vips.map((vip) => `/${encodeURIComponent(vip.guest)}`);

  return (
    <>
      <BgVideo vipsUrls={vipsUrls} videosUrls={['/MMEventos.mp4']} />
      <main className="flex h-[87vh] max-w-xs m-auto flex-col gap-12">
        <GuestNav />

        <SectionOrganizer />
      </main>
      <Footer />
    </>
  );
}
