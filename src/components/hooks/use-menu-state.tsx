'use client';

import { create } from 'zustand';
import { MenuOptions } from '../../firebase/types';

interface UseMenuStateProps {
  allMenuOptions: MenuOptions[];
}

interface UseMenuStateActions {
  setMenuOptionQuantity: (menuName: string, quantity: number) => void;
  setMenuOptionIsNoTACC: (menuName: string) => void;
}

export const useMenuState = create<UseMenuStateProps & UseMenuStateActions>((set) => ({
  allMenuOptions: [
    {
      menuName: 'Pizza Napolitana',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Rúcula',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Choclo',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Fugazeta',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Especial',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Calabresa',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza 4 Quesos',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Pizza Primavera',
      quantity: 0,
      price: 3500,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Calzone 4 Quesos',
      quantity: 0,
      price: 3750,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Calzone Napolitano',
      quantity: 0,
      price: 3750,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Calzone Calabresa',
      quantity: 0,
      price: 3750,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Calzone Jamón y Queso',
      quantity: 0,
      price: 3750,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
    {
      menuName: 'Calzone Mozarela',
      quantity: 0,
      price: 3750,
      priceNoTacc: undefined,
      isNoTACC: false,
    },
  ],

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
}));
