import { GuestMenusContainer } from 'components/guest-menus-container';
import { getAllGuestMenu } from '../../../firebase/get-all-menu';
import Image from 'next/image';
import { GuestMenu } from '../../../firebase/types';
import { BgVideo } from 'components/bg-video';
import { Metadata } from 'next/types';
import { orderAllGuestByDate } from '../../../utils/order-all-guest-by-date';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Alfonso | Reservas',
  description: 'Consulta las reservas de menu.',
};

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];
  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenus);

  const orderedGuestsMenusPaid = orderedGuestsMenus.filter((guest) => guest.isPaid);
  const orderedGuestsMenusNotPaid = orderedGuestsMenus.filter((guest) => !guest.isPaid);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5">
      <BgVideo isWhiteBg />

      <h1>Reservas</h1>

      <br />

      {orderedGuestsMenusNotPaid.length ? (
        <ul>
          <h2>No Pagadas</h2>
          {orderedGuestsMenusNotPaid.map((guest) => (
            <GuestMenusContainer key={guest.id} guestMenu={guest} />
          ))}
        </ul>
      ) : null}

      {orderedGuestsMenusPaid.length ? (
        <ul>
          <h2>Pagadas</h2>
          {orderedGuestsMenusPaid.map((guest) => (
            <GuestMenusContainer key={guest.id} guestMenu={guest} />
          ))}
        </ul>
      ) : null}
    </main>
  );
}
