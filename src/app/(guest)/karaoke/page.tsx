import { karaokeListUrl } from 'config/const';
import { Metadata } from 'next/types';
import Image from 'next/image';
import Link from 'next/link';
import karaokeTutorial from 'public/karaoke_playlist_tutorial.jpg';

export const metadata: Metadata = {
  title: 'Alfonso | Karaoke',
  description: 'Elige tus canciones favoritas.',
};

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-66px)] max-w-[400px] m-auto flex flex-col items-center justify-center p-5">
      <h1>Karaoke</h1>
      <p>¡Es hora de brillar!</p>

      <p className="text-info mt-10">
        Sigue las instrucciones indicadas abajo para agregar vídeos a la Playlist de YouTube.
      </p>
      <p className="text-info mb-10">De paso vemos lo que te gusta.</p>

      <div className="max-w-[400px] flex flex-col items-center">
        <Image
          className="rounded-xl mb-5"
          src={karaokeTutorial}
          alt={'Karaoke Tutorial'}
          width={400}
          height={300}
        />
        <Link className="text-info" href={karaokeListUrl} rel="noopener noreferrer" target="_blank">
          Ir a YouTube
        </Link>
      </div>
    </main>
  );
}
