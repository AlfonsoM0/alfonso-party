'use client';

import Link from 'next/link';
import { useVipUrlState } from '../hooks/use-vip-url-state';
import { useState } from 'react';

export function SectionOrganizer(): JSX.Element {
  const mapURL = 'https://maps.app.goo.gl/zDWH8ygStbV81b1TA';

  const { isOrganizer } = useVipUrlState();

  const [isShowOrgOps, setIsShowOrgOps] = useState(false);

  function copyLinkToClipboard() {
    navigator.clipboard.writeText(mapURL);
    alert('Link copiado al portapapeles');
  }

  return (
    <section className="mt-28">
      {!isShowOrgOps ? (
        <div className="[&_p]:mb-2">
          <h2 className="mb-3">¡No seas ansiosa!</h2>
          <p>La ubicación será compartida por los organizadores de cada grupo.</p>
          <p>Si NO estás en uno de esos grupos, puedes pedirme la ubicación por WhatsApp.</p>
          <p className="mt-5">¡Gracias!</p>

          {isOrganizer ? (
            <div className="flex justify-center">
              <button onClick={() => setIsShowOrgOps(!isShowOrgOps)} className="mt-5">
                Organizar evento
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="border p-5 rounded-xl">
          <h2>Eres Organizador del Evento</h2>
          <p>Tienes acceso a las siguientes opciones.</p>

          <div className="flex flex-wrap gap-2 mt-5 justify-center">
            <Link href={mapURL} className="btn-sm h-fit" target="_blank" rel="noopener noreferrer">
              Abrir ubicación en Google Maps
            </Link>
            <button onClick={copyLinkToClipboard} className="btn-sm  h-fit">
              Compartir el enlace con tu Grupo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
