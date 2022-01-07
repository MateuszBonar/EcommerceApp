import { IReduxAction } from 'Store/types';
import * as actions from 'Store/constants';
import { initialStateModuleUI } from './initialState';
import { IUIModuleStore, UIActionPayload } from './types';

const UIReducer = (
  state: IUIModuleStore = initialStateModuleUI,
  action: IReduxAction<UIActionPayload>
): IUIModuleStore => {
  switch (action.type) {
    case `${actions.TOGGLE_MOBILE}`:
      return {
        ...state,
        error: null,
        isLoading: true,
        isMobileVisible: !action.payload as boolean,
      };
    default:
      return state;
  }
};

export default UIReducer;
