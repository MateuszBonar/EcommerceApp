import { IStore } from "../types";
import { ICartModuleStore } from "./types";

export const getCartModuleSelector = (store: IStore): ICartModuleStore => store.cartModule;
