import React, { createContext, useContext, useReducer } from "react";

//prepares data layer
export const StateContext = createContext();

//wraps app and provides each component with data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);
