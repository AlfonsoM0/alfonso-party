'use server';

import { doc, getDoc, getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from '.';
import { VIP } from './types';

const db = getFirestore(firebaseApp);

export async function getVIP(vipName: string): Promise<VIP> {
  const docRef = doc(db, 'VIP', vipName);

  const docSnap = await getDoc(docRef);

  return docSnap.data() as VIP;
}
