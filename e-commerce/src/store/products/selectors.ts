import { IStore } from '../types';
import { IProductsModuleStore } from './types';

export const getProductsModuleSelector = (store: IStore): IProductsModuleStore =>
  store.productsModule;
