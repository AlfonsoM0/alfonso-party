import { GuestMenusContainer } from 'components/guest-menus-container';
import { getAllGuestMenu } from '../../../firebase/get-all-menu';
import { Metadata } from 'next/types';
import { orderAllGuestByDate } from '../../../utils/order-all-guest-by-date';
import { ClickToUpdate } from './click-to-update';
import { deleteOldGuestMenus } from '../../../utils/delete-old-guest-menus';
import { hsToDeleteAGuesMenu } from '../../../config/const';

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
    <main className="flex min-h-[calc(100vh-66px)] flex-col items-center justify-center py-5 pt-20 mb-10">
      <h1>Reservas</h1>
      <ClickToUpdate />

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
