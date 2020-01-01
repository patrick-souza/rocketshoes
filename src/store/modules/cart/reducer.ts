import produce from 'immer';

import { IProduct, CartActions } from './types';
import { IAction } from '../rootReducer';

const INITIAL_STATE: IProduct[] = [];

export default function cart(
  state = INITIAL_STATE,
  action: IAction<IProduct | number | { id: number; amount: number }>
) {
  switch (action.type) {
    case CartActions.ADD_SUCCESS:
      return produce(state, draft => {
        const product = action.payload as IProduct;

        draft.push(product);
      });
    case CartActions.REMOVE_FROM_CART:
      return produce(state, draft => {
        const id = action.payload as number;

        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    case CartActions.UPDATE_AMOUNT_SUCCESS:
      return produce(state, draft => {
        const { id, amount } = action.payload as { id: number; amount: number };
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) draft[productIndex].amount = amount;
      });
    default:
      return state;
  }
}
