import { GuestMenusContainer } from 'components/guest-menus-container';
import { getAllGuestMenu } from 'firebase';
import { Metadata } from 'next/types';
import { deleteOldGuestMenus, orderAllGuestByDate } from 'utils';
import { ClickToUpdate } from './click-to-update';
import { hsToDeleteAGuesMenu } from 'config/const';
import Link from 'next/link';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Alfonso | Reservas',
  description: 'Consulta las reservas de menu.',
};

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];
  const allGuestsMenusNew = deleteOldGuestMenus({
    GuestMenus: allGuestsMenus,
    hours: hsToDeleteAGuesMenu,
  });

  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenusNew);

  const orderedGuestsMenusPaid = orderedGuestsMenus.filter((guest) => guest.isPaid);
  const orderedGuestsMenusNotPaid = orderedGuestsMenus.filter((guest) => !guest.isPaid);

  return (
    <main className="main-normal flex flex-col items-center">
      <h1>Reservas</h1>
      <ClickToUpdate />
      <Link className="mt-5" href="/menu">
        Volver al Menú
      </Link>

      <br />

      {orderedGuestsMenusNotPaid.length ? (
        <ul>
          <h2>Pendientes</h2>
          <p className="text-center mb-5">(No pagadas)</p>
          {orderedGuestsMenusNotPaid.map((guest) => (
            <GuestMenusContainer key={guest.id} guestMenu={guest} />
          ))}
        </ul>
      ) : null}

      <br />

      {orderedGuestsMenusPaid.length ? (
        <ul>
          <h2>Confirmadas</h2>
          <p className="text-center mb-5">(pagadas)</p>
          {orderedGuestsMenusPaid.map((guest) => (
            <GuestMenusContainer key={guest.id} guestMenu={guest} />
          ))}
        </ul>
      ) : null}
    </main>
  );
}
