'use client';

import { GuestMenu } from '../firebase/types';
import { ButtonTACC } from './button-tacc';
import { useMenuGuestState } from '../hooks/use-menu-guest-state';
import Link from 'next/link';

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
      'Pischiwan! te copié el alias para tranferir al portapapeles. \n \n Alias: fiesta.alfonso.ar \n \n Esa cuenta es única para la fiesta. \n \n Luego yo me fijo y te apruebo el pago.'
    );
  }

  const phone = process.env.NEXT_PUBLIC_ADMIN_PHONE || '';

  const text = `*Aviso de Pago de:* ${guest} %0A *Total:* $${totalPrice} %0A *Código:* ${id} %0A (Adjuntar comprobante de pago)`;

  return (
    <li className="collapse collapse-plus bg-base-200 my-3">
      <input type="radio" name="my-accordion-3" defaultChecked={id === gId} />
      <div className="collapse-title text-xl font-medium">{guest}</div>

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
          <span>Total:</span>$ {totalPrice}
          {isPaid ? (
            ' | Pagado ✅'
          ) : (
            <span className="flex justify-center gap-1">
              <button onClick={onPaid} className="btn-md text-xs">
                Pagar
              </button>

              <Link
                className="btn-md text-xs p-1 px-2 flex flex-col"
                href={`https://api.whatsapp.com/send?phone=${phone}&text=${text}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Avisar por</span>
                <span>WhatsApp</span>
              </Link>
            </span>
          )}
        </p>
      </div>
    </li>
  );
}
