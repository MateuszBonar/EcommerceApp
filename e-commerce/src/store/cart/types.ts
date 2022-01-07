import { IStoreModule } from '../types';

export interface ICart {
  id: string;
  name: string;
  quantity: string;
}

export interface ICarts {
  id: string;
  created: string;
  line_total: {
    formatted_with_symbol: string;
  };
  subtotal: {
    formatted_with_symbol: string;
  };
  line_items: ICart[];
}

export interface ICartModuleStore extends IStoreModule {
  carts: ICarts;
}

export type CartActionPayload = ICarts | Error | null;
