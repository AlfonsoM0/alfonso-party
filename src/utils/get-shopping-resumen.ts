import { menuOptions } from '../config/menu';
import { GuestMenu, MenuOptions } from '../firebase/types';

export function getShoppingResumen({
  allGuestMenu,
  isNoTACC,
}: {
  allGuestMenu: GuestMenu[];
  isNoTACC: boolean;
}): MenuOptions[] {
  const completeShoppingOfAllGuest: MenuOptions[] = [];

  allGuestMenu.forEach((guestMenu) => {
    guestMenu.shoppingCart.forEach((menuOption) => {
      completeShoppingOfAllGuest.push(menuOption);
    });
  });

  const completeShoppingOfAllGuest_tacc = completeShoppingOfAllGuest.filter(
    (menuOption) => menuOption.isNoTACC === false
  );
  const completeShoppingOfAllGuest_noTacc = completeShoppingOfAllGuest.filter(
    (menuOption) => menuOption.isNoTACC === true
  );

  if (isNoTACC) return combineShopping(completeShoppingOfAllGuest_noTacc, true);
  else return combineShopping(completeShoppingOfAllGuest_tacc, false);
}

/**
 *
 * @param allShoopping (only tacc or noTacc lists)
 * @returns MenuOptions[]
 */
function combineShopping(allShoopping: MenuOptions[], isNoTACC: boolean): MenuOptions[] {
  const menuCards = menuOptions;

  const menuNames = new Set(allShoopping.map((menuOption) => menuOption.menuName));
  const combinedShopping: MenuOptions[] = [];

  menuNames.forEach((menuName) => {
    const price = menuCards.find((mo) => mo.menuName === menuName)!.price;
    const priceNoTacc = menuCards.find((mo) => mo.menuName === menuName)!.priceNoTacc;
    const quantity = allShoopping.reduce(
      (prev, curr) => prev + (curr.menuName === menuName ? curr.quantity : 0),
      0
    );

    combinedShopping.push({ menuName, price, priceNoTacc, quantity, isNoTACC });
  });

  return combinedShopping;
}
