import {cartActions} from "./cart/actions";
import {productsActions} from "./products/actions";

export const actions = {...productsActions, ...cartActions};
