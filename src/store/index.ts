import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IProduct } from './modules/cart/types';

export type IAppState = {
  cart: IProduct[];
};
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
