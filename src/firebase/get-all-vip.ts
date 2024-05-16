'use server';

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '.';
import { Collection } from './enums';
import { VIP } from './types';

export async function getAllVip() {
  const res = await getDocs(collection(db, Collection.VIP));

  return res.docs.map((doc) => doc.data()) as VIP[];
}
