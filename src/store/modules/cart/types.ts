export type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
  amount: number;
  subtotal: string;
};

export const CartActions = {
  ADD_TO_CART: '@cart/ADD',
  REMOVE_FROM_CART: '@cart/REMOVE',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
};
