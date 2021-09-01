// setting up the data layer for react context api as to avoid props drilling
// we need it here to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
