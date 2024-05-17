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
    <li key={id} className="grid grid-cols-5 gap-1">
      <div className="col-span-3 flex items-center">
        <p className="text-left">
          {guest} | ${totalPrice} {isPaid ? '✅' : '❌'}
        </p>
      </div>
      <label className="cursor-pointer label">
        <span className="label-text">¿Pagado?</span>
        <input
          type="checkbox"
          className="toggle toggle-success"
          checked={isPaid}
          onChange={onPaid}
        />
      </label>
      <button className="btn btn-sm" onClick={onDelete}>
        Eliminar
      </button>
    </li>
  );
}
