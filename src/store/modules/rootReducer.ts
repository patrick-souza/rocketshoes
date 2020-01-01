import { combineReducers, Action } from 'redux';

import cart from './cart/reducer';

export type IAction<T> = Action & { payload: T };

const reducers = combineReducers({
  cart,
});

export default reducers;
