import * as actionTypes from '../constants';
import { Dispatch } from 'redux';
import { commerce } from '../../lib/commerce';

const getCarts = () => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.GET_CARTS}_STARTED` });
  return commerce.cart.retrieve().then(
    (response: any) => dispatch({ type: `${actionTypes.GET_CARTS}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.GET_CARTS}_FAILURE`, payload: err })
  );
};

const addToCart = (productId: string, quantity: any) => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.ADD_TO_CART}_STARTED` });
  return commerce.cart.add(productId, quantity).then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.ADD_TO_CART}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.ADD_TO_CART}_FAILURE`, payload: err })
  );
};

const updateCart = (lineItemId: string, quantity: any) => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.UPDATE_CART}_STARTED` });
  return commerce.cart.update(lineItemId, { quantity }).then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.UPDATE_CART}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.UPDATE_CART}_FAILURE`, payload: err })
  );
};

const removeFromCart = (lineItemId: string) => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.REMOVE_FROM_CART}_STARTED` });
  return commerce.cart.remove(lineItemId).then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.REMOVE_FROM_CART}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.REMOVE_FROM_CART}_FAILURE`, payload: err })
  );
};

const clearCart = () => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.CLEAR_CART}_STARTED` });
  return commerce.cart.empty().then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.CLEAR_CART}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.CLEAR_CART}_FAILURE`, payload: err })
  );
};

const refreshCart = () => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.REFRESH_CART}_STARTED` });
  return commerce.cart.refresh().then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.REFRESH_CART}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.REFRESH_CART}_FAILURE`, payload: err })
  );
};

const captureCheckout = (checkoutTokenId: string, newOrder: any) => (dispatch: Dispatch) => {
  dispatch({ type: `${actionTypes.CAPTURE_CHECKOUT}_STARTED` });
  return commerce.checkout.capture(checkoutTokenId, newOrder).then(
    (response: unknown) =>
      dispatch({ type: `${actionTypes.CAPTURE_CHECKOUT}_SUCCESS`, payload: response }),
    (err: Error) => dispatch({ type: `${actionTypes.CAPTURE_CHECKOUT}_FAILURE`, payload: err })
  );
};

export const cartActions = {
  getCarts,
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
  refreshCart,
  captureCheckout,
};
