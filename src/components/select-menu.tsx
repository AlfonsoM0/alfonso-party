'use client';

import { useMenuGuestState, useMenuState } from 'hooks';
import { MenuOptions } from 'firebase/types';
import { useEffect, useState } from 'react';
import { setGuestMenu as setGuestMenuToDB } from 'firebase';
import { useRouter } from 'next/navigation';
import { ButtonTACC } from './button-tacc';

export function SelectMenu() {
  const router = useRouter();

  const { allMenuOptions, setMenuOptionQuantity, setMenuOptionIsNoTACC, setMenuOtionsToDefault } =
    useMenuState();
  const { guestMenu, setGuestMenu } = useMenuGuestState();

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  function incrementQuantity(option: MenuOptions) {
    setMenuOptionQuantity(option.menuName, option.quantity + 1);
  }
  function decrementQuantity(option: MenuOptions) {
    setMenuOptionQuantity(option.menuName, Math.max(0, option.quantity - 1));
  }

  function onSubmit() {
    if (!guestMenu.guest) {
      setErrorMsg('Por favor, introduce tu nombre.');
      router.push('/menu/#menu');
      return;
    }
    if (!guestMenu.totalPrice) {
      setErrorMsg('Por favor, agrega una opción.');
      router.push('/menu/#menu');
      return;
    }
    setIsSubmit(true);
    setErrorMsg('');

    const newGuestMenu = {
      ...guestMenu,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      shoppingCart: allMenuOptions.filter((option) => option.quantity > 0),
    };
    setGuestMenuToDB(newGuestMenu);

    router.push('/menu/reservas');
    router.refresh();

    setMenuOtionsToDefault();
    setGuestMenu();

    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
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
      <p className="text-error animate-pulse">{errorMsg}</p>

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

              <ButtonTACC isNoTACC={isNoTACC} onClick={() => setMenuOptionIsNoTACC(menuName)} />
            </div>
          </div>
        );
      })}

      <h2>Total: ${guestMenu.totalPrice}</h2>

      <button onClick={onSubmit} disabled={isSubmit} className="w-full mt-5 text-info">
        {isSubmit ? <div className="loading loading-spinner" /> : 'Crear Pedido'}
      </button>
    </>
  );
}
