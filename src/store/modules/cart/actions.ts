import { CartActions, IProduct } from './types';
import { IAction } from '../rootReducer';

export const addToCart = (product: IProduct): IAction<IProduct> => ({
  type: CartActions.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number): IAction<number> => ({
  type: CartActions.REMOVE_FROM_CART,
  payload: id,
});
