import { IStoreModule } from 'Store';

export interface IUIModuleStore extends IStoreModule {
  isMobileVisible: boolean;
}
export type UIActionPayload = boolean | Error | null;
