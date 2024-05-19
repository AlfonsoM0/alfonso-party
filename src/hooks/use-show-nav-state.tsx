'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShowNavState {
  isShowNav: boolean;
  setShowNav: (isShowNav: boolean) => void;
}

export const useShowNavState = create<ShowNavState>()(
  persist(
    (set) => ({
      isShowNav: false,
      setShowNav: (isShowNav: boolean) => set({ isShowNav }),
    }),
    { name: 'is-show-nav' }
  )
);
