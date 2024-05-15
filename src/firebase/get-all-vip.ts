'use server';

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '.';
import { VIP } from './types';

export async function getAllVip() {
  const res = await getDocs(collection(db, 'VIP'));

  return res.docs.map((doc) => doc.data()) as VIP[];
}
