import { CombinedState, Reducer, combineReducers } from 'redux';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import { IStore } from './types';
import UIReducer from './ui/reducer';

const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  productsModule: productsReducer,
  cartModule: cartReducer,
  uiModule: UIReducer,
});

export default rootReducer;
