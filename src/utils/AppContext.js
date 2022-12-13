import React, { createContext, useReducer } from "react";
import shortid from "shortid";
import { reducer } from "./AppReducer";
export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    app: [],
    socials: [],
    menu: [
      { name: "Home", isActive: true, uid: shortid.generate() },
      { name: "About", isActive: false, uid: shortid.generate() },
      { name: "Service", isActive: false, uid: shortid.generate() },
      { name: "Donate", isActive: false, uid: shortid.generate() },
      { name: "Contact", isActive: false, uid: shortid.generate() },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        app: state.app,
        isLoading: state.isLoading,
        menu: state.menu,
        socials: state.socials,
      }}>
      {children}
    </AppContext.Provider>
  );
};
