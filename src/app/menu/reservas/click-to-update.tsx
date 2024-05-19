'use client';

import { useRouter } from 'next/navigation';

export function ClickToUpdate() {
  const router = useRouter();

  return (
    <>
      <small>
        * Si no aparece tu pedido, haz{' '}
        <span className="btn btn-xs btn-ghost text-info" onClick={() => router.refresh()}>
          click aquí
        </span>{' '}
        para actualizar la página.
      </small>

      <small>* Nuestro master chef necesita que confirmes tu pedido para reservar.</small>
      <small>* Las reservas no confirmadas son eliminadas luego de 1 hora.</small>
    </>
  );
}
