import {Action} from 'redux'
import { ICartModuleStore } from './cart/types';
import { IProductsModuleStore } from './products/types';

export interface IStore {
    productsModule: IProductsModuleStore,
    cartModule: ICartModuleStore
}

export interface ActionsParam {
    [key: string]: Function;
}

export interface IStoreModule {
    isLoading: boolean;
    error: Error | null
}

export interface IActionWithError<P> {
    error?: P
}

export interface ILoadingAction {
    loading?: boolean
}

export interface IActionBody<P> extends IActionWithError<Error>, ILoadingAction {
    payload?: P;
}

export interface IReduxAction<T> extends Action<string>, IActionBody<T>{}
