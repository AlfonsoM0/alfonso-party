import { BgVideo } from 'components/bg-video';
import { getVIP } from '../../firebase/get-vip';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { vip: string } }) {
  const vip = decodeURIComponent(params.vip);

  try {
    const infoVIP = await getVIP(vip);
    const { guest, msg, rol } = infoVIP;

    return (
      <main className="flex h-[87vh] mt-5 max-w-xs m-auto flex-col items-center justify-center gap-12">
        <BgVideo />

        <div>
          <h1>{guest}</h1>
          <p>{msg}</p>
        </div>

        <div>
          <h2>Viernes 31 de Mayo</h2>
          <p>A partir de las 22:00 hs</p>
        </div>

        <div
          className="tooltip w-full animate-in zoom-in duration-500"
          data-tip="Confirmar Google Calendar"
        >
          <a
            href="https://calendar.app.google/twzDcTZaSMsLMY8s5"
            rel="noopener noreferrer"
            target="_blank"
          >
            ASISTIR
          </a>
        </div>

        <div
          className="tooltip hover:cursor-pointer"
          data-tip="Puedes mostrar esta entrada para evitar la lista de invitados."
        >
          <p>Entrada VIP</p>
          <small>{`(${rol})`}</small>
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    redirect('/');
  }
}