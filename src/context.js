import { createContext } from "react";

export const defaultContextValue = {

    basketTotalPrice: 0,
    basketTotalAmount: 0,
    basketItems: [],
}

export const AppContext = createContext(defaultContextValue);