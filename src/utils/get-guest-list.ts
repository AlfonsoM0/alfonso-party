'use server';

import { GuestAsistance } from 'firebase/types';
import fs from 'fs';
import path from 'path';

export async function getGuestList(): Promise<GuestAsistance[]> {
  const guestList: GuestAsistance[] = [];

  const filePath = path.join(process.cwd(), 'src/config/guest-list.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    data.split(',\r\n').forEach((guest) => {
      guestList.push({
        name: guest,
        isOrganizer: guest.includes('(ORG)'),
        isVip: guest.includes('(VIP)') || guest.includes('(ORG)'),
        isCheckedIn: false,
      });
    });
  });

  return guestList;
}
