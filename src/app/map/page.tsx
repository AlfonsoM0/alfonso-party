import { BgVideo } from 'components/bg-video';
import { Footer } from 'components/footer';
import { GuestNav } from 'components/guest-nav';
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

        <div className="mt-24 [&_p]:mb-2">
          {/* <h1>Próximamente</h1> */}
          <h2 className="mb-3">¡No seas ansiosa!</h2>
          <p>La ubicación será compartida por los organizadores de cada grupo.</p>
          <p>Si NO estás en uno de esos grupos, puedes pedirme la ubicación por WhatsApp.</p>
          <p className="mt-5">¡Gracias!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
