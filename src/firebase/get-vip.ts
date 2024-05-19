'use server';

import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from './db';
import { Collection } from './enums';
import { VIP } from './types';

export async function getVIP(vipName: string): Promise<VIP> {
  const docRef = doc(db, Collection.VIP, vipName);

  const docSnap = await getDoc(docRef);

  return docSnap.data() as VIP;
}
