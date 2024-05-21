'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface vipUrlStateProps {
  vipUrl: string;
  setVipUrl: (vipUrl: string) => void;
}

export const useVipUrlState = create<vipUrlStateProps>()(
  persist(
    (set) => ({
      vipUrl: '',
      setVipUrl: (vipUrl) => set({ vipUrl }),
    }),
    {
      name: 'vip-url-storage',
    }
  )
);
