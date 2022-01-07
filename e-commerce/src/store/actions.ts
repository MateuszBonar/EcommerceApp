import { cartActions } from './cart/actions';
import { productsActions } from './products/actions';
import { UIActions } from './ui';

export const actions = { ...productsActions, ...cartActions, ...UIActions };
