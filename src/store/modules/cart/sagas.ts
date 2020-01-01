import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { IAction } from '../rootReducer';
import {
  addToCartSuccess,
  updateAmountRequest,
  updateAmountSuccess,
} from './actions';
import { CartActions, IProduct } from './types';
import { formatPrice } from 'util/format';
import { IAppState } from 'store';
import history from 'services/history';

function* addToCart(action: IAction<number>) {
  try {
    const id = action.payload;
    const productExists: IProduct = yield select((state: IAppState) =>
      state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      console.tron.warn('Erro stock');
      toast.error('Quantidade solicitada fora de estoque.');
      return;
    }

    if (productExists) {
      yield put(updateAmountRequest(id, amount));
    } else {
      const response = yield call(api.get, `products/${id}`);

      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price),
      };
      yield put(addToCartSuccess(data));

      history.push('/cart');
    }
  } catch (error) {}
}

function* updateAmount(action: IAction<{ id: number; amount: number }>) {
  try {
    const { id, amount } = action.payload;

    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
      console.tron.warn('Erro stock');
      toast.error('Quantidade solicitada fora de estoque.');
      return;
    }

    yield put(updateAmountSuccess(id, amount));
  } catch (error) {}
}

export default all([
  takeLatest(CartActions.ADD_TO_CART, addToCart),
  takeLatest(CartActions.UPDATE_AMOUNT, updateAmount),
]);
