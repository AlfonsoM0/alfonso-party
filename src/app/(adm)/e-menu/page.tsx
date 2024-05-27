import { ButtonsEditMenu } from 'components';
import { getAllGuestMenu } from 'firebase';
import { deleteOldGuestMenus, orderAllGuestByDate } from 'utils';
import Link from 'next/link';
import { hsToDeleteAGuesMenu } from 'config/const';

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];
  const allGuestsMenusNew = deleteOldGuestMenus({
    GuestMenus: allGuestsMenus,
    hours: hsToDeleteAGuesMenu,
  });

  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenusNew);

  const nopayedGuestsMenus = orderedGuestsMenus.filter((guest) => !guest.isPaid);
  const payedGuestsMenus = orderedGuestsMenus.filter((guest) => guest.isPaid);

  return (
    <main className="main-normal">
      <h1>Menu Editor</h1>

      <br />
      <div className="flex flex-col gap-2 justify-center">
        <Link className="btn-md" href="/e-menu/resumen">
          Ver Resumen de Reservas
        </Link>
        <Link className="btn-md" href="/e-menu/reservas">
          Ver Reservas
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
