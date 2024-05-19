import { GuestMenusContainer } from 'components/guest-menus-container';
import { getAllGuestMenu } from '../../../firebase/get-all-menu';
import { BgVideo } from 'components/bg-video';
import { Metadata } from 'next/types';
import { orderAllGuestByDate } from '../../../utils/order-all-guest-by-date';
import { ClickToUpdate } from './click-to-update';
import { deleteOldGuestMenus } from '../../../utils/delete-old-guest-menus';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Alfonso | Reservas',
  description: 'Consulta las reservas de menu.',
};

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];

  deleteOldGuestMenus({ GuestMenus: allGuestsMenus, hours: 1 });

  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenus);

  const orderedGuestsMenusPaid = orderedGuestsMenus.filter((guest) => guest.isPaid);
  const orderedGuestsMenusNotPaid = orderedGuestsMenus.filter((guest) => !guest.isPaid);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 my-10">
      <BgVideo isWhiteBg />

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
