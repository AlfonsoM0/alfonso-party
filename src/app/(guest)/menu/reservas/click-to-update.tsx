'use client';

import { useRouter } from 'next/navigation';

export function ClickToUpdate() {
  const router = useRouter();

  return (
    <>
      <small>
        * Si no aparece tu pedido,
        <span className="btn btn-xs btn-ghost text-info" onClick={() => router.refresh()}>
          haz click aquí
        </span>{' '}
        para actualizar la página.
      </small>

      <small>* Nuestro master chef necesita que confirmes tu pedido para reservar.</small>
      <small>* Las reservas no confirmadas se eliminan automaticamente pasadas las 8hs.</small>
    </>
  );
}
