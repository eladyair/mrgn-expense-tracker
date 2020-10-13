import React, { createContext, useReducer } from 'react';

// Reducers
import AppReducer from './reducers/app.reducer';

const initialState = {
    transactions: []
};

// Creating context
export const GlobalContext = createContext(initialState);

// Creating a Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <GlobalContext.Provider value={{ transactions: state.transactions, dispatch }}>{children}</GlobalContext.Provider>;
};
