import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("english");
  
    return (
        <Context.Provider value={{ language, setLanguage }}>
            {children}
        </Context.Provider>
    );
};