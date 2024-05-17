import { GuestMenu, MenuOptions } from '../firebase/types';

export function getShoppingResumen(allGuestMenu: GuestMenu[]): {
  tacc: MenuOptions[];
  noTacc: MenuOptions[];
} {
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

  // combine MenuOptions with same menuName and isNoTACC values.

  return {
    tacc: combineShopping(completeShoppingOfAllGuest_tacc),
    noTacc: combineShopping(completeShoppingOfAllGuest_noTacc),
  };
}

/**
 *
 * @param allShoopping (only tacc or noTacc lists)
 * @returns MenuOptions[]
 */
function combineShopping(allShoopping: MenuOptions[]): MenuOptions[] {
  const menuNames = new Set(allShoopping.map((menuOption) => menuOption.menuName));
  const combinedShopping: MenuOptions[] = [];

  menuNames.forEach((menuName) => {
    const price = allShoopping.find((mo) => mo.menuName === menuName)!.price;
    const priceNoTacc = allShoopping.find((mo) => mo.menuName === menuName)!.priceNoTacc;
    const quantity = allShoopping.reduce(
      (prev, curr) => prev + (curr.menuName === menuName ? curr.quantity : 0),
      0
    );
    const isNoTACC = allShoopping[0].isNoTACC;

    combinedShopping.push({ menuName, price, priceNoTacc, quantity, isNoTACC });
  });

  return combinedShopping;
}
