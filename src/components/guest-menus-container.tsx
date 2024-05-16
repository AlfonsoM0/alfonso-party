'use client';

import { GuestMenu } from '../firebase/types';
import { ButtonTACC } from './button-tacc';
import { useMenuGuestState } from './hooks/use-menu-guest-state';

interface GuestMenusContainerProps {
  guestMenu: GuestMenu;
}

export function GuestMenusContainer({ guestMenu }: GuestMenusContainerProps) {
  const { guest, shoppingCart, isPaid, totalPrice, id } = guestMenu;
  const {
    guestMenu: { id: gId },
  } = useMenuGuestState();

  function onPaid() {
    navigator.clipboard.writeText('fiesta.alfonso.ar');
    alert(
      'Pischiwan! te copié el alias para tranferir: fiesta.alfonso.ar \n Esa cuenta es única para la fiesta. \n \n Luego yo me fijo y te apruebo el pago.'
    );
  }

  return (
    <li className="collapse collapse-plus bg-base-200 my-3">
      <input type="radio" name="my-accordion-3" defaultChecked={id === gId} />
      <div className="collapse-title text-xl font-medium">De: {guest}</div>

      <div className="collapse-content">
        <ul>
          {shoppingCart.map((item) => (
            <li key={item.menuName}>
              <div className="grid grid-cols-6">
                <p className="col-span-4">{item.menuName}</p>
                <p>x {item.quantity}</p>
                <ButtonTACC isNoTACC={item.isNoTACC} />
              </div>
            </li>
          ))}
        </ul>
        <p>
          Total: $ {totalPrice} |{' '}
          {isPaid ? (
            'Pagado ✅'
          ) : (
            <button onClick={onPaid} className="btn-md text-xs">
              Pagar
            </button>
          )}
        </p>
      </div>
    </li>
  );
}
