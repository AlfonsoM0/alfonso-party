import { GuestMenusContainer } from 'components/guest-menus-container';
import { getAllGuestMenu } from '../../../../firebase/get-all-menu';
import { GuestMenu } from '../../../../firebase/types';
import { Metadata } from 'next/types';
import { orderAllGuestByDate } from '../../../../utils/order-all-guest-by-date';
import { getShoppingResumen } from '../../../../utils/get-shopping-resumen';
import { deleteOldGuestMenus } from '../../../../utils/delete-old-guest-menus';
import { hsToDeleteAGuesMenu } from '../../../../config/const';

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
    <main className="flex min-h-screen max-w-screen-sm m-auto flex-col items-center justify-center p-5">
      <h1>Reservas</h1>
      <span>Resumen total de comida pagada</span>
      <span>$ {GuestPartyTacc.totalPrice + GuestPartyNoTacc.totalPrice}</span>

      <br />

      <GuestMenusContainer guestMenu={GuestPartyTacc} />
      <GuestMenusContainer guestMenu={GuestPartyNoTacc} />
    </main>
  );
}
