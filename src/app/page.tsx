import Image from 'next/image';

export default function Home() {
  const textColor = 'text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500';
  return (
    <main className="flex h-[87vh] max-w-xs m-auto flex-col items-center justify-center gap-12">
      <div>
        <h1>Fiesta Retro</h1>
        <p>Cumpleaños Dance</p>
      </div>

      <div>
        <h2>Viernes 31 de Mayo</h2>
        <p>A partir de las 22:00 hs</p>
      </div>

      <div className="tooltip" data-tip="Confirmar en el evento de Google Calendar">
        <a
          href="https://calendar.app.google/twzDcTZaSMsLMY8s5"
          rel="noopener noreferrer"
          target="_blank"
        >
          CONFIRMAR ASISTENCIA
        </a>
      </div>
    </main>
  );
}
