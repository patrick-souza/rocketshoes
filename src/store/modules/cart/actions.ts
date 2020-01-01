import { CartActions, IProduct } from './types';

export const addToCart = (product: IProduct) => ({
  type: CartActions.ADD_TO_CART,
  payload: product,
});
