import { CartActions, IProduct } from './types';
import { IAction } from '../rootReducer';

export const addToCart = (product: IProduct): IAction<IProduct> => ({
  type: CartActions.ADD_TO_CART,
  payload: product,
});
