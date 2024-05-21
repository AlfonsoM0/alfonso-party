import { GuestMenusContainer } from 'components';
import { getAllGuestMenu } from 'firebase';
import type { GuestMenu } from 'firebase/types';
import { Metadata } from 'next/types';
import { deleteOldGuestMenus, getShoppingResumen, orderAllGuestByDate } from 'utils';
import { hsToDeleteAGuesMenu } from 'config/const';

// Revalidate every 1 hour.
export const revalidate = 60 * 60 * 1;

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

  const createdAt = new Date().toISOString();

  const GuestPartyTacc: GuestMenu = {
    id: 'GuestPartyTacc',
    createdAt,
    guest: 'Con TACC',
    isPaid: true,
    shoppingCart: getShoppingResumen({ allGuestMenu: orderedGuestsMenusPaid, isNoTACC: false }),
    totalPrice: getShoppingResumen({
      allGuestMenu: orderedGuestsMenusPaid,
      isNoTACC: false,
    }).reduce((total, option) => {
      const { price, quantity } = option;
      return total + price * quantity;
    }, 0),
  };

  const GuestPartyNoTacc: GuestMenu = {
    id: 'GuestPartyNoTacc',
    createdAt,
    guest: 'Sin TACC',
    isPaid: true,
    shoppingCart: getShoppingResumen({ allGuestMenu: orderedGuestsMenusPaid, isNoTACC: true }),
    totalPrice: getShoppingResumen({ allGuestMenu: orderedGuestsMenusPaid, isNoTACC: true }).reduce(
      (total, option) => {
        const { priceNoTacc, quantity } = option;
        return total + (priceNoTacc || 0) * quantity;
      },
      0
    ),
  };

  return (
    <main className="main-normal flex flex-col items-center justify-center">
      <h1>Reservas</h1>
      <span>Resumen total de comida pagada</span>
      <span>Se actualiza cada 1 hora.</span>

      <span>$ {GuestPartyTacc.totalPrice + GuestPartyNoTacc.totalPrice}</span>

      <br />

      <GuestMenusContainer guestMenu={GuestPartyTacc} />
      <GuestMenusContainer guestMenu={GuestPartyNoTacc} />
    </main>
  );
}
