import React, { createContext, useState } from "react";

const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  let [themeColors, setThemeColors] = useState({
    mainColor: "#1945C2",
    textColor: "#000",
  });
  return (
    <themeContext.Provider value={{ themeColors, setThemeColors }}>
      {children}
    </themeContext.Provider>
  );
};

export {themeContext,ThemeContextProvider}
