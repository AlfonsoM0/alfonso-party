import { BgVideo } from 'components/bg-video';
import { SelectMenu } from 'components/select-menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <BgVideo isWhiteBg />

      <h1>Menú</h1>
      <p>Para comer de 23:00 a 01:00hs</p>

      <Link className="mt-5" href="/menu/reservas">
        Ver Reservas
      </Link>

      {/* 
      <section className="max-w-md mt-10 p-5">
        <h2>Por parte del cumpleañero</h2>

        <ul className="card-body">
          <li> 3 Pizzas de Mozzarella</li>
          <li> 5 Pizzas Especiales</li>
          <li> 2 Pizzas Especiales sin TACC</li>
          <li> 3 Pizzas 4 Quesso</li>
          <li> 2 Pizzas de Rúcula</li>
          <li> ¡La Torta! </li>
        </ul>
      </section> */}

      <section className="max-w-md  p-5">
        <h2>Reserva tu Menú</h2>

        <SelectMenu />
      </section>
    </main>
  );
}
