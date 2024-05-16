'use server';

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '.';
import { Collection } from './enums';
import { GuestMenu } from './types';

export async function getAllGuestMenu() {
  const res = await getDocs(collection(db, Collection.MENU));

  return res.docs.map((doc) => doc.data()) as GuestMenu[];
}
