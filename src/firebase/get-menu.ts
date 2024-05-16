'use server';

import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '.';
import { Collection } from './enums';
import { GuestMenu } from './types';

export async function getMenu(menuId: string): Promise<GuestMenu> {
  const docRef = doc(db, Collection.MENU, menuId);

  const docSnap = await getDoc(docRef);

  return docSnap.data() as GuestMenu;
}
