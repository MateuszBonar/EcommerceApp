import { IStoreModule } from '../types';

export interface ICart {
  id: string;
  name: string;
  quantity: string;
  line_total: {
    formatted_with_symbol: string;
  };
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
  total_items: number | null;
}

export interface ICartModuleStore extends IStoreModule {
  carts: ICarts;
}

export type CartActionPayload = ICarts | Error | null;
