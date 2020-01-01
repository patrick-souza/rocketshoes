import { CartActions, IProduct } from './types';
import { IAction } from '../rootReducer';

export const addToCart = (id: number): IAction<number> => ({
  type: CartActions.ADD_TO_CART,
  payload: id,
});

export const addToCartSuccess = (product: IProduct): IAction<IProduct> => ({
  type: CartActions.ADD_SUCCESS,
  payload: product,
});

export const removeFromCart = (id: number): IAction<number> => ({
  type: CartActions.REMOVE_FROM_CART,
  payload: id,
});

export const updateAmountRequest = (id: number, amount: number) => ({
  type: CartActions.UPDATE_AMOUNT,
  payload: { id, amount },
});

export const updateAmountSuccess = (id: number, amount: number) => ({
  type: CartActions.UPDATE_AMOUNT_SUCCESS,
  payload: { id, amount },
});
