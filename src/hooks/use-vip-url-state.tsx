'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface vipUrlStateProps {
  vipUrl: string;
  isOrganizer: boolean;
  organizerKey: string;
  setVipUrl: (vipUrl: string) => void;
  setIsOrganizer: (isOrganizer: boolean) => void;
  setOrganizerKey: (organizerKey: string) => void;
}

export const useVipUrlState = create<vipUrlStateProps>()(
  persist(
    (set) => ({
      vipUrl: '',
      isOrganizer: false,
      organizerKey: '',
      setVipUrl: (vipUrl) => set({ vipUrl }),
      setIsOrganizer: (isOrganizer) => set({ isOrganizer }),
      setOrganizerKey: (organizerKey) => set({ organizerKey }),
    }),
    {
      name: 'vip-url-storage',
    }
  )
);
