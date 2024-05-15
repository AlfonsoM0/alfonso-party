'use client';

import { Titles } from 'components/titles';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex h-[87vh] max-w-xs m-auto flex-col items-center justify-center gap-12">
      <Suspense>
        <Titles />
      </Suspense>

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
