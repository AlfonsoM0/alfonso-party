'use client';

import { create } from 'zustand';

interface AuthState {
  admin: boolean;
  setAdmin: (admin: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
  admin: false,
  setAdmin: (admin: boolean) => set({ admin }),
}));
