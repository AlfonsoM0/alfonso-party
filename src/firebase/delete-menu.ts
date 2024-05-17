'use server';

import { doc, deleteDoc } from 'firebase/firestore/lite';
import { GuestMenu } from './types';
import { db } from '.';
import { Collection } from './enums';

export async function deleteGuestMenu(guestMenu: GuestMenu): Promise<void> {
  const docRef = doc(db, Collection.MENU, guestMenu.id);

  await deleteDoc(docRef);
}
