import { IStoreModule } from '../types';

export interface ICart {}

export interface ICartModuleStore extends IStoreModule {
  carts: ICart[];
}

export type CartActionPayload = ICart[] | Error | null;
