import { SelectMenu } from 'components';
import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Alfonso | Menu',
  description: 'Elige qué quieres comer.',
};

export default function Page() {
  return (
    <main className="main-normal flex flex-col items-center justify-center">
      <h1 id="menu">Menú</h1>
      <p>Para comer de 23:00 a 01:00hs</p>

      <Link className="mt-5 text-info" href="/menu/reservas">
        Ver Pedidos
      </Link>

      <h2 className="mt-5 text-error">Ya no se pueden realizar reservas.</h2>
      <p className="text-error"> ¡ Que Explote la Fiesta 🕺 !</p>

      {/* <section className="max-w-md  p-5">
        <h2>Reserva tu Menú</h2>
        <p className="text-xs text-info">* Click en `TACC` para elegir con o sin.</p>
        <p className="text-xs text-info">* `Crear Pedido` para crear y ver todos los pedidos.</p>
        <p className="text-xs text-info mb-2">* Solo los pedidos pagados son reservados.</p>

        <SelectMenu />
      </section> */}
    </main>
  );
}
