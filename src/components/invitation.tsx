'use client';

import { GuestNav, Titles } from 'components';
import { Suspense } from 'react';
import { useShowNavState } from 'hooks';
import { calendarUrl } from 'config/const';

interface InvitationProps {
  guest?: string;
  message?: string;
  rol?: string;
}

export function Invitation({ guest, message, rol }: InvitationProps) {
  const { isShowNav } = useShowNavState();

  return (
    <main className="flex h-[87vh] max-w-xs m-auto flex-col items-center justify-center gap-12">
      {isShowNav ? <GuestNav /> : null}

      <Suspense fallback={fallbackTitle}>
        <Titles guest={guest} message={message} />
      </Suspense>

      <div>
        <h2>Viernes 31 de Mayo</h2>
        <p>A partir de las 22:00 hs</p>
      </div>

      <div
        className="tooltip w-full animate-in zoom-in duration-500"
        data-tip="Confirmar Google Calendar"
      >
        <a className="text-neutral" href={calendarUrl} rel="noopener noreferrer" target="_blank">
          {isShowNav ? 'VER EVENTO' : 'ASISTIR'}
        </a>
      </div>

      {guest ? (
        <div
          className="tooltip hover:cursor-pointer"
          data-tip="Puedes mostrar esta entrada para evitar la lista de invitados."
        >
          <p>Entrada VIP</p>
          <small>{rol ? `(${rol})` : null}</small>
        </div>
      ) : null}
    </main>
  );
}

const fallbackTitle = (
  <div>
    <h1>Fiesta Retro</h1>
    <p>Cumpleaños Dance</p>
  </div>
);
