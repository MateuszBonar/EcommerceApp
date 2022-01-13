import { IStore } from 'Store';
import { ICartModuleStore } from './types';

export const getCartModuleSelector = (store: IStore): ICartModuleStore => store.cartModule;
