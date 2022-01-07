import { CombinedState, Reducer, combineReducers } from 'redux';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import { IStore } from './types';

const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  productsModule: productsReducer,
  cartModule: cartReducer,
});

export default rootReducer;
