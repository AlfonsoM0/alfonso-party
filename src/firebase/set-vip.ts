'use server';

import { doc, setDoc } from 'firebase/firestore/lite';
import { VIP } from './types';
import { db } from '.';

export async function setVip(vip: VIP): Promise<void> {
  const docRef = doc(db, 'VIP', vip.guest);

  return setDoc(docRef, vip);
}
