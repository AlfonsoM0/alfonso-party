export enum Collection {
  VIP = 'VIP',
  MENU = 'MENU',
}

export type VIP = {
  msg: string;
  guest: string;
  rol: string;
};

export type MenuOptions = {
  menuName: string;
  price: number;
  priceNoTacc?: number;
  quantity: number;
  isNoTACC: boolean;
};

export type GuestMenu = {
  id: string;
  guest: string;
  shoppingCart: MenuOptions[];
  totalPrice: number;
  isPaid: boolean;
  createdAt: string;
};

export type GuestAsistance = {
  name: string;
  isOrganizer: boolean;
  isVip: boolean;
  isCheckedIn: boolean;
};
