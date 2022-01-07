import { IStore } from 'Store';
import { IUIModuleStore } from './types';

export const getUIModuleSelector = (store: IStore): IUIModuleStore => store.uiModule;
