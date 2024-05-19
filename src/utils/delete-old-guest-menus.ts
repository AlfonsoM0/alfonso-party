import { deleteGuestMenu } from '../firebase/delete-menu';
import type { GuestMenu } from '../firebase/types';

/**
 * Verifica si hay GuestMenus mayores a X horas. Y elimina aquellos no pagados.
 * Luego retorna el nuevo array de GuestMenus.
 */
export function deleteOldGuestMenus({
  GuestMenus,
  hours,
}: {
  GuestMenus: GuestMenu[];
  hours: number;
}): GuestMenu[] {
  const now = new Date();
  const newGuestMenus: GuestMenu[] = [];

  // Si no esta pagado y es mas de X horas, lo elimina.
  GuestMenus.forEach((guestMenu) => {
    if (guestMenu.isPaid) {
      newGuestMenus.push(guestMenu);
      return;
    }

    const date = new Date(guestMenu.createdAt);

    if (now.getTime() - date.getTime() > hours * 60 * 60 * 1000) {
      deleteGuestMenu(guestMenu);
    } else newGuestMenus.push(guestMenu);
  });

  return newGuestMenus;
}
