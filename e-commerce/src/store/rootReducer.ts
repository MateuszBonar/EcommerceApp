import { CombinedState, Reducer, combineReducers } from 'redux';
import productsReducer from 'Store/products';
import cartReducer from 'Store/cart';
import UIReducer from 'Store/ui';
import { IStore } from './types';

const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  productsModule: productsReducer,
  cartModule: cartReducer,
  uiModule: UIReducer,
});

export default rootReducer;
