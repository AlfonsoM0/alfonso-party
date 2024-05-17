import { GuestMenu } from '../firebase/types';

export function orderAllGuestByDate(allGuestsMenus: GuestMenu[]) {
  return allGuestsMenus.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (dateA.getTime() > dateB.getTime()) {
      return -1;
    }
    if (dateA.getTime() < dateB.getTime()) {
      return 1;
    }
    return 0;
  });
}
