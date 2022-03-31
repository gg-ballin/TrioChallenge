export interface Menus {
  name: string;
  menus: ItemMenu;
}

export interface ItemMenu {
  name: string;
  items: Item;
}

export interface Item {
  name: string;
  description: string;
  price: number;
  url: string;
}

export interface LocationObj {
  address1: string;
  address2: string;
  city: string;
  country: string;
  lat: string;
  log: string;
  postalCode: string;
  state: string;
}
export interface OpDays {
  day: string;
  startAt: string;
  endAt: string;
}
export interface Franchise {
  currency: string;
  description: string;
  id: string;
  location: LocationObj;
  menus: Menus;
  name: string;
  operationDays: OpDays;
  phone: string;
  privateParking: boolean;
}
