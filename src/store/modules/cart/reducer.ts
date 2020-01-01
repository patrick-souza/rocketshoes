import produce from 'immer';

import { IProduct, CartActions } from './types';
import { IAction } from '../rootReducer';

const INITIAL_STATE: IProduct[] = [];

export default function cart(
  state = INITIAL_STATE,
  action: IAction<IProduct | number>
) {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return produce(state, draft => {
        const product = action.payload as IProduct;

        const productIndex = draft.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...product, amount: 1 });
        }
      });
    case CartActions.REMOVE_FROM_CART:
      return produce(state, draft => {
        const id = action.payload as number;

        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    default:
      return state;
  }
}
