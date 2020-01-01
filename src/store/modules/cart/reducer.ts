import { AnyAction } from 'redux';
import { IProduct, CartActions } from './types';

const INITIAL_STATE: IProduct[] = [];

export default function cart(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
