export type IProduct = {
  id: number;
  model: string;
  picture: string;
  price: number;
};

export type BascketItem = IProduct & {
  quantity: number;
};