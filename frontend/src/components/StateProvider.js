import React, { createContext, useContext, useReducer } from "react"

// Create the data layer
export const StateContext = createContext() ; 

// build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


// This is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext) ; 