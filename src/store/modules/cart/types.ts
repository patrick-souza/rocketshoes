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
  ADD_TO_CART: '@cart/ADD_REQUEST',
  ADD_TO_CART_SUCCESS: '@cart/ADD_SUCCESS',
  ADD_TO_CART_FAILURE: '@cart/ADD_FAILURE',
  REMOVE_FROM_CART: '@cart/REMOVE',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
};
