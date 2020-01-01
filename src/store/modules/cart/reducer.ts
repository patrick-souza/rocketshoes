import produce from 'immer';

import { IProduct, CartActions } from './types';
import { IAction } from '../rootReducer';

const INITIAL_STATE: IProduct[] = [];

export default function cart(state = INITIAL_STATE, action: IAction<IProduct>) {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.payload, amount: 1 });
        }
      });
    default:
      return state;
  }
}
