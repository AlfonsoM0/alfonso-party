import { GuestMenu } from '../firebase/types';

export function orderAllGuestByDate(allGuestsMenus: GuestMenu[]) {
  return allGuestsMenus.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  });
}
