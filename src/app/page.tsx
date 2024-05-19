'use client';

import { GuestNav, Titles } from 'components';
import { Suspense } from 'react';
import { useShowNavState } from 'hooks';
import { calendarUrl } from 'config/const';

export default function Home() {
  const { isShowNav } = useShowNavState();

  return (
    <main className="flex h-[87vh] max-w-xs m-auto flex-col items-center justify-center gap-12">
      {isShowNav ? <GuestNav /> : null}

      <Suspense fallback={fallbackTitle}>
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
        <a href={calendarUrl} rel="noopener noreferrer" target="_blank">
          {isShowNav ? 'VER EVENTO' : 'ASISTIR'}
        </a>
      </div>
    </main>
  );
}

const fallbackTitle = (
  <div>
    <h1>Fiesta Retro</h1>
    <p>Cumpleaños Dance</p>
  </div>
);
