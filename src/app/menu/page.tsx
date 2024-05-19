import { BgVideo } from 'components/bg-video';
import { SelectMenu } from 'components/select-menu';
import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Alfonso | Menu',
  description: 'Elige qué quieres comer.',
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <BgVideo isWhiteBg />

      <h1 id="menu">Menú</h1>
      <p>Para comer de 23:00 a 01:00hs</p>

      <Link className="mt-5" href="/menu/reservas">
        Ver Pedidos
      </Link>

      <section className="max-w-md  p-5">
        <h2>Reserva tu Menú</h2>
        <p className="text-xs text-info">* Click en `TACC` para elegir con o sin.</p>
        <p className="text-xs text-info">* `Crear Pedido` crear y ver todos los pedidos.</p>
        <p className="text-xs text-info">* Solo los pedidos pagados son reservados.</p>

        <SelectMenu />
      </section>
    </main>
  );
}
