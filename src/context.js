import React, { useContext } from "react";
import { navList } from "./lists/navList/navList";

const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
    return (
        <AppContext.Provider
            value={{
                navList,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default ContextProvider;
