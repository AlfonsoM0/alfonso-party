'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('n') || 'Fiesta Retro';

  const [msg, setMsg] = useState('Cumpleaños Dance');

  useEffect(() => {
    if (name !== 'Fiesta Retro') {
      const randomMsg = msgOptions[Math.floor(Math.random() * msgOptions.length)];
      setMsg(randomMsg);
    }
  }, [name]);

  return (
    <main className="flex h-[87vh] max-w-xs m-auto flex-col items-center justify-center gap-12">
      <div>
        <h1>{name}</h1>
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
    </main>
  );
}

const msgOptions = [
  '¿Sale Jodita Retro?',
  '¡Te invito a mi cumpleaños Retro, Pichan!',
  '¡Sale Fiesta Retro +1000!',
  '¡EXPLOTA la Joda Retro!',
  '¡Metele pal baile Retro!',
];
