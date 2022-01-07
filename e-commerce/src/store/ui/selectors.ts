import { IStore } from '../types';
import { IUIModuleStore } from './types';

export const getUIModuleSelector = (store: IStore): IUIModuleStore => store.uiModule;
