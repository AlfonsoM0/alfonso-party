'use client';

import { useMenuState } from './hooks/use-menu-state';
import { MenuOptions } from '../firebase/types';
import { useEffect, useState } from 'react';
import { useMenuGuestState } from './hooks/use-menu-guest-state';
import { setGuestMenu as setGuestMenuToDB } from '../firebase/set-menu';
import { useRouter } from 'next/navigation';

export function SelectMenu() {
  const router = useRouter();

  const { allMenuOptions, setMenuOptionQuantity, setMenuOptionIsNoTACC } = useMenuState();
  const { guestMenu, setGuestMenu } = useMenuGuestState();

  const [errorMsg, setErrorMsg] = useState('');

  function incrementQuantity(option: MenuOptions) {
    setMenuOptionQuantity(option.menuName, option.quantity + 1);
  }
  function decrementQuantity(option: MenuOptions) {
    setMenuOptionQuantity(option.menuName, Math.max(0, option.quantity - 1));
  }

  function onSubmit() {
    if (!guestMenu.guest) {
      setErrorMsg('Por favor, introduce tu nombre.');
      return;
    }
    if (!guestMenu.totalPrice) {
      setErrorMsg('Por favor, agrega una opción.');
      return;
    }

    setErrorMsg('');
    console.info('guestMenu => ', guestMenu);
    setGuestMenuToDB({
      ...guestMenu,
      shoppingCart: allMenuOptions.filter((option) => option.quantity > 0),
    });
    router.push('/menu/reservas');
  }

  useEffect(() => {
    setGuestMenu({
      ...guestMenu,
      totalPrice: allMenuOptions.reduce((total, option) => {
        const { price, priceNoTacc, isNoTACC, quantity } = option;
        return total + (isNoTACC && priceNoTacc ? priceNoTacc * quantity : price * quantity);
      }, 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMenuOptions]);

  return (
    <>
      <label className="label">
        <span className="label-text read-only:hidden">Nombre de quien paga</span>
        <input
          placeholder="Tu nombre"
          className="input input-bordered text-center w-full"
          type="text"
          required
          value={guestMenu.guest}
          onChange={(e) => setGuestMenu({ ...guestMenu, guest: e.target.value })}
        />
      </label>
      <p className="text-error">{errorMsg}</p>

      {allMenuOptions.map((option) => {
        const { menuName, price, priceNoTacc, isNoTACC, quantity } = option;
        return (
          <div className="my-3 flex justify-between" key={menuName}>
            <p>
              {menuName} <small>${isNoTACC ? priceNoTacc : price}</small>
            </p>
            <div className="flex gap-2">
              <button className="btn btn-circle btn-xs" onClick={() => decrementQuantity(option)}>
                -
              </button>
              <p className="text-center text-xl">{quantity}</p>
              <button className="btn btn-circle btn-xs" onClick={() => incrementQuantity(option)}>
                +
              </button>
              <button
                className={`btn btn-circle btn-sm ${isNoTACC ? 'text-success' : 'text-error'}`}
                onClick={() => setMenuOptionIsNoTACC(menuName)}
              >
                {isNoTACC ? 'SIN TACC' : 'CON TACC'}
              </button>
            </div>
          </div>
        );
      })}

      <h2>Total: ${guestMenu.totalPrice}</h2>

      <button onClick={onSubmit} className="w-full my-5">
        Reservar
      </button>
    </>
  );
}
