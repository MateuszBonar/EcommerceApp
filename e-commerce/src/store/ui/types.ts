import { IStoreModule } from '../types';

export interface IUIModuleStore extends IStoreModule {
  isMobileVisible: boolean;
}
export type UIActionPayload = boolean | Error | null;
