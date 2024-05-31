'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GuestAsistance } from 'firebase/types';
import { guestListCopyPasteFromLog } from 'config/const';

interface GuestListProps {
  guestList: GuestAsistance[];
  setGuestList: (guestList: GuestAsistance[]) => void;
  setIsCheckedIn: (name: string, isCheckedIn: boolean) => void;
}

export const useGuestListState = create<GuestListProps>()(
  persist(
    (set) => ({
      guestList: guestListCopyPasteFromLog,

      setGuestList: (guestList) => {
        set({ guestList });
      },
      setIsCheckedIn: (name, isCheckedIn) => {
        set((state) => ({
          guestList: state.guestList.map((guest) => {
            if (guest.name === name) {
              return { ...guest, isCheckedIn };
            }
            return guest;
          }),
        }));
      },
    }),
    {
      name: 'gest-list-storage',
    }
  )
);
