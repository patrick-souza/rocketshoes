import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IProduct } from './modules/cart/types';

export type IAppState = {
  cart: IProduct[];
};

const store = createStore(rootReducer);

export default store;
