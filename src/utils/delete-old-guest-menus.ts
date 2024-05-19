import { deleteGuestMenu } from '../firebase/delete-menu';
import type { GuestMenu } from '../firebase/types';

/**
 * Verifica si hay GuestMenus mayores a X horas. Y elimina aquellos no pagados.
 */
export function deleteOldGuestMenus({
  GuestMenus,
  hours,
}: {
  GuestMenus: GuestMenu[];
  hours: number;
}) {
  const now = new Date();

  GuestMenus.forEach((guestMenu) => {
    if (guestMenu.isPaid) return;

    const date = new Date(guestMenu.createdAt);

    if (now.getTime() - date.getTime() > hours * 60 * 60 * 1000) {
      deleteGuestMenu(guestMenu);
    }
  });
}
