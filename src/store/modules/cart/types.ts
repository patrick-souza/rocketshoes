export type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
  amount: number;
};

export const CartActions = {
  ADD_TO_CART: '@cart/ADD_TO_CART',
  REMOVE_FROM_CART: '@cart/REMOVE_FROM_CART',
};
