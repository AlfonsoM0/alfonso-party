'use client';

import { create } from 'zustand';
import { GuestMenu } from '../../firebase/types';

const initialGuestMenuState: GuestMenu = {
  id: crypto.randomUUID(),
  guest: '',
  shoppingCart: [],
  totalPrice: 0,
  isPaid: false,
  createdAt: new Date(),
};

interface UseMenuGuestStateProps {
  guestMenu: GuestMenu;
}

interface UseMenuGuestStateActions {
  setGuestMenu: (guestMenu?: GuestMenu) => void;
}

export const useMenuGuestState = create<UseMenuGuestStateProps & UseMenuGuestStateActions>(
  (set) => ({
    guestMenu: initialGuestMenuState,

    // Actions
    setGuestMenu: (guestMenu?: GuestMenu) =>
      set({
        guestMenu: guestMenu || initialGuestMenuState,
      }),
  })
);
