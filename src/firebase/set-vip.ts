'use server';

import { doc, getFirestore, setDoc } from 'firebase/firestore/lite';
import { VIP } from './types';
import { firebaseApp } from '.';

export async function setVip(vip: VIP): Promise<void> {
  const db = getFirestore(firebaseApp);

  const docRef = doc(db, 'VIP', vip.guest);

  return setDoc(docRef, vip);
}
