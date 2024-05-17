'use client';

import { useRouter } from 'next/navigation';
import { deleteGuestMenu } from '../firebase/delete-menu';
import { setGuestMenu } from '../firebase/set-menu';
import { GuestMenu } from '../firebase/types';

export function ButtonsEditMenu({ guestMenu }: { guestMenu: GuestMenu }) {
  const router = useRouter();
  const { id, guest, isPaid, totalPrice } = guestMenu;

  function onPaid() {
    setGuestMenu({
      ...guestMenu,
      isPaid: !isPaid,
    });
    router.refresh();
  }
  function onDelete() {
    deleteGuestMenu(guestMenu);
    router.refresh();
  }

  return (
    <li key={id} className="flex flex-col border rounded-lg p-2 m-2">
      <div className="flex justify-between items-center">
        <p>{guest}</p>
        <small>
          ${totalPrice} {isPaid ? '✅' : '❌'}
        </small>
      </div>
      <div className="flex justify-between items-center">
        <button className="btn btn-sm" onClick={onDelete}>
          Eliminar
        </button>

        <label className="cursor-pointer label gap-2">
          <span className="label-text">¿Pagado?</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isPaid}
            onChange={onPaid}
          />
        </label>
      </div>
    </li>
  );
}
