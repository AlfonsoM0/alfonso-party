import { ButtonsEditMenu } from 'components/buttons-edit-menu';
import { getAllGuestMenu } from '../../../firebase/get-all-menu';
import { orderAllGuestByDate } from '../../../utils/order-all-guest-by-date';
import Link from 'next/link';

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];
  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenus);

  const nopayedGuestsMenus = orderedGuestsMenus.filter((guest) => !guest.isPaid);
  const payedGuestsMenus = orderedGuestsMenus.filter((guest) => guest.isPaid);

  return (
    <main className="min-h-screen max-w-[400px] m-auto pt-10">
      <h1>Menu Editor</h1>

      <br />
      <div className="flex justify-center">
        <Link className="btn-md" href="/e-menu/resumen">
          Ver Resumen de Reservas
        </Link>
      </div>
      <br />

      <ul>
        {nopayedGuestsMenus.map((gm) => (
          <ButtonsEditMenu key={gm.id} guestMenu={gm} />
        ))}
        {payedGuestsMenus.map((gm) => (
          <ButtonsEditMenu key={gm.id} guestMenu={gm} />
        ))}
      </ul>
    </main>
  );
}
