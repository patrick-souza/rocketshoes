export type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
};

export const CartActions = {
  ADD_TO_CART: '@cart/ADD_TO_CART',
};
