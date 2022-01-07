import { IReduxAction } from '../types';
import * as actions from '../constants';
import { initialStateModuleCart } from './initialState';
import { ICartModuleStore, CartActionPayload, ICarts } from './types';

const cartReducer = (
  state: ICartModuleStore = initialStateModuleCart,
  action: IReduxAction<CartActionPayload>
): ICartModuleStore => {
  switch (action.type) {
    case `${actions.GET_CARTS}_STARTED`:
    case `${actions.ADD_TO_CART}_STARTED`:
    case `${actions.UPDATE_CART}_STARTED`:
    case `${actions.REMOVE_FROM_CART}_STARTED`:
    case `${actions.CLEAR_CART}_STARTED`:
    case `${actions.REFRESH_CART}_STARTED`:
    case `${actions.CAPTURE_CHECKOUT}_STARTED`:
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
    case `${actions.ADD_TO_CART}_SUCCESS`:
    case `${actions.UPDATE_CART}_SUCCESS`:
    case `${actions.REMOVE_FROM_CART}_SUCCESS`:
    case `${actions.CLEAR_CART}_SUCCESS`:
    case `${actions.REFRESH_CART}_SUCCESS`:
    case `${actions.CAPTURE_CHECKOUT}_SUCCESS`:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case `${actions.GET_CARTS}_FAILURE`:
    case `${actions.ADD_TO_CART}_FAILURE`:
    case `${actions.UPDATE_CART}_FAILURE`:
    case `${actions.REMOVE_FROM_CART}_FAILURE`:
    case `${actions.CLEAR_CART}_FAILURE`:
    case `${actions.REFRESH_CART}_FAILURE`:
    case `${actions.CAPTURE_CHECKOUT}_FAILURE`:
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
