'use server';

import { doc, setDoc } from 'firebase/firestore/lite';
import { VIP } from './types';
import { db } from '.';
import { Collection } from './enums';

export async function setVip(vip: VIP): Promise<void> {
  const docRef = doc(db, Collection.VIP, vip.guest);

  return setDoc(docRef, vip);
}
