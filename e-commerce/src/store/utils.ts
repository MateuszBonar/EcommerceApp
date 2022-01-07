import { Dispatch } from 'redux';
//TO DO WRAPPER ACTION
export const actionWrapper =
  (actionType: string, actionFn: Promise<any>) => (dispatch: Dispatch) => {
    dispatch({ type: `${actionType}_STARTED` });
    return actionFn.then(
      (response: unknown) => dispatch({ type: `${actionType}_SUCCESS`, payload: response }),
      (err: Error) => dispatch({ type: `${actionType}_FAILURE`, payload: err })
    );
  };

export const actionCreator = (type: string, params?: Record<string, any>) => ({
  type,
  ...(params ? params : {}),
});
