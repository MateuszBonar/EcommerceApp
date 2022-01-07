import { cartActions } from 'Store/cart';
import { productsActions } from 'Store/products';
import { UIActions } from './ui';

export const actions = { ...productsActions, ...cartActions, ...UIActions };
