import { IStore } from 'Store';
import { IProductsModuleStore } from './types';

export const getProductsModuleSelector = (store: IStore): IProductsModuleStore =>
  store.productsModule;
