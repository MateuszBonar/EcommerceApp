import { IStoreModule } from '../types';

export interface IProduct {}

export interface IProductsModuleStore extends IStoreModule {
  products: IProduct[];
}

export type ProductsActionPayload = IProduct[] | Error | null;
