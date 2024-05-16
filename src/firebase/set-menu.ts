'use server';

import { doc, setDoc } from 'firebase/firestore/lite';
import { GuestMenu } from './types';
import { db } from '.';
import { Collection } from './enums';

export async function setGuestMenu(guestMenu: GuestMenu): Promise<void> {
  const docRef = doc(db, Collection.VIP, guestMenu.id);

  return setDoc(docRef, guestMenu);
}
