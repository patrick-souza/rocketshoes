import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { IAction } from '../rootReducer';
import { addToCartSuccess } from './actions';
import { CartActions } from './types';

function* addToCart(action: IAction<number>) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `products/${id}`);

    yield put(addToCartSuccess(response.data));
  } catch (error) {}
}

export default all([takeLatest(CartActions.ADD_TO_CART, addToCart)]);
