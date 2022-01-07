import { Action } from 'redux';
import { ICartModuleStore } from 'Store/cart';
import { IProductsModuleStore } from 'Store/products';
import { IUIModuleStore } from 'Store/ui';

export interface IStore {
  productsModule: IProductsModuleStore;
  cartModule: ICartModuleStore;
  uiModule: IUIModuleStore;
}

export interface ActionsParam {
  [key: string]: Function;
}

export interface IStoreModule {
  isLoading: boolean;
  error: Error | null;
}

export interface IActionWithError<P> {
  error?: P;
}

export interface ILoadingAction {
  loading?: boolean;
}

export interface IActionBody<P> extends IActionWithError<Error>, ILoadingAction {
  payload?: P;
}

export interface IReduxAction<T> extends Action<string>, IActionBody<T> {}
