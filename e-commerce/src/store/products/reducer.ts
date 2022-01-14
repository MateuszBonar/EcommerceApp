import { IReduxAction } from 'Store';
import * as actions from '../constants';
import { initialStateModuleProducts } from './initialState';
import { IProduct, IProductsModuleStore, ProductsActionPayload } from './types';

const productsReducer = (
  state: IProductsModuleStore = initialStateModuleProducts,
  action: IReduxAction<ProductsActionPayload>
): IProductsModuleStore => {
  switch (action.type) {
    case `${actions.GET_PRODUCTS}_STARTED`:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case `${actions.GET_PRODUCTS}_SUCCESS`:
      const { data } = action.payload as any;
      return {
        ...state,
        error: null,
        products: data as IProduct[],
        isLoading: false,
      };
    case `${actions.GET_PRODUCTS}_FAILURE`:
      return {
        ...state,
        error: action.payload as Error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
