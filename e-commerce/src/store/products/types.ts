import { IStoreModule } from 'Store';

export interface IProduct {
  id: string;
  name: string;
  media: {
    source: string;
  };
  price: {
    formatted: string;
  };
  description: string;
}

export interface IProductsModuleStore extends IStoreModule {
  products: IProduct[];
}

export type ProductsActionPayload = IProduct[] | Error | null;
