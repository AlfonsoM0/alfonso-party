'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  admin: boolean;
  setAdmin: (admin: boolean) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      admin: false,
      setAdmin: (admin) => set({ admin }),
    }),
    { name: 'admin' }
  )
);
