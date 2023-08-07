import { createContext, useReducer } from "react";

const initialState = {
    lenguage: true,
};

const reducer = (state, action) => {
    switch (action.type) {
      case "lenguage":
        return { ...state, lenguage: !lenguage };
      default:
        return state;
    }
};

export const LenguageContext = createContext();

const LenguageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <LenguageContext.Provider value={{state, dispatch}}>
            {children}
        </LenguageContext.Provider>
    );
}

export default LenguageContextProvider;
  