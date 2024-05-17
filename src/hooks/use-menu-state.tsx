'use client';

import { create } from 'zustand';
import { MenuOptions } from '../firebase/types';

interface UseMenuStateProps {
  allMenuOptions: MenuOptions[];
}

interface UseMenuStateActions {
  setMenuOptionQuantity: (menuName: string, quantity: number) => void;
  setMenuOptionIsNoTACC: (menuName: string) => void;
  setMenuOtionsToDefault: () => void;
}

const initialMenuOptionsState: MenuOptions[] = [
  {
    menuName: '1 Pizza Napolitana',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Rúcula',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Choclo',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Fugazeta',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Especial',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Calabresa',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza 4 Quesos',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1 Pizza Primavera',
    quantity: 0,
    price: 3500,
    priceNoTacc: 5300,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Napolitana',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Rúcula',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Choclo',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Fugazeta',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Especial',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Calabresa',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  4 Quesos',
    quantity: 0,
    price: 2000,
    priceNoTacc: undefined,
    isNoTACC: false,
  },
  {
    menuName: '1/2 Pizza  Primavera',
    quantity: 0,
    price: 2000,
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
    menuName: 'Calzone J&Q',
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
];

export const useMenuState = create<UseMenuStateProps & UseMenuStateActions>((set) => ({
  allMenuOptions: initialMenuOptionsState,

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
    set({ allMenuOptions: initialMenuOptionsState });
  },
}));
