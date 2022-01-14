import { Dispatch } from 'redux';
import * as actionTypes from '../constants';
import { commerce } from 'Commerce/commerce';

const getProducts = () => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.GET_PRODUCTS}_STARTED` });
  return commerce.products.list().then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.GET_PRODUCTS}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.GET_PRODUCTS}_FAILURE`, payload: err })
  );
};
export const productsActions = {
  getProducts,
};
