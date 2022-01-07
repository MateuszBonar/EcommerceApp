import { Dispatch } from 'redux';
import { actionCreator } from 'Store/utils';
import * as actionTypes from 'Store/constants';

const toggleMobileVisible =
  (isMobileVisible: boolean) =>
  (dispatch: Dispatch): void => {
    dispatch(actionCreator(actionTypes.TOGGLE_MOBILE, { payload: isMobileVisible }));
  };

export const UIActions = {
  toggleMobileVisible,
};
