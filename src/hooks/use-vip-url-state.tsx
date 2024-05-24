'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface vipUrlStateProps {
  vipUrl: string;
  isOrganizer: boolean;
  setVipUrl: (vipUrl: string) => void;
  setIsOrganizer: (isOrganizer: boolean) => void;
}

export const useVipUrlState = create<vipUrlStateProps>()(
  persist(
    (set) => ({
      vipUrl: '',
      isOrganizer: false,
      setVipUrl: (vipUrl) => set({ vipUrl }),
      setIsOrganizer: (isOrganizer) => set({ isOrganizer }),
    }),
    {
      name: 'vip-url-storage',
    }
  )
);
