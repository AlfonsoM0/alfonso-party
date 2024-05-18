'use client';

import { create } from 'zustand';
import { MenuOptions } from '../firebase/types';
import { menuOptions } from '../config/menu';

interface UseMenuStateProps {
  allMenuOptions: MenuOptions[];
}

interface UseMenuStateActions {
  setMenuOptionQuantity: (menuName: string, quantity: number) => void;
  setMenuOptionIsNoTACC: (menuName: string) => void;
  setMenuOtionsToDefault: () => void;
}

export const useMenuState = create<UseMenuStateProps & UseMenuStateActions>((set) => ({
  allMenuOptions: menuOptions,

  // Actions
  setMenuOptionQuantity: (menuName: string, quantity: number) => {
    set((state) => ({
      allMenuOptions: state.allMenuOptions.map((menu) => {
        if (menu.menuName === menuName) {
          return { ...menu, quantity };
        }
        return menu;
      }),
    }));
  },
  setMenuOptionIsNoTACC: (menuName: string) => {
    set((state) => ({
      allMenuOptions: state.allMenuOptions.map((menu) => {
        if (menu.menuName === menuName) {
          const { isNoTACC, priceNoTacc } = menu;
          if (!priceNoTacc) return menu;
          return { ...menu, isNoTACC: !isNoTACC };
        }
        return menu;
      }),
    }));
  },
  setMenuOtionsToDefault: () => {
    set({ allMenuOptions: menuOptions });
  },
}));
