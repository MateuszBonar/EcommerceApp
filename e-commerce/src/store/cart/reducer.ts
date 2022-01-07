import { IReduxAction } from '../types';
import * as actions from '../constants';
import { initialStateModuleCart } from './initialState';
import { ICart, ICartModuleStore, CartActionPayload, ICarts } from './types';

const cartReducer = (
  state: ICartModuleStore = initialStateModuleCart,
  action: IReduxAction<CartActionPayload>
): ICartModuleStore => {
  switch (action.type) {
    case `${actions.GET_CARTS}_STARTED`:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case `${actions.GET_CARTS}_SUCCESS`:
      return {
        ...state,
        error: null,
        carts: action.payload as ICarts,
        isLoading: false,
      };
    case `${actions.GET_CARTS}_FAILURE`:
      return {
        ...state,
        error: action.payload as Error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
