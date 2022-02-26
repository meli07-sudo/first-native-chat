import React, { createContext, useState,useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

let AuthContext = createContext();

let AuthContextProvider = ({ children }) => {
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  let updateCurrentUserInfo=async (newJwt)=>{
    setCurrentUserInfo(jwt_decode(newJwt));
    await SecureStore.setItemAsync('jwt',newJwt)
  }
  useEffect(()=>{
    SecureStore.getItemAsync("jwt").then((jwtToken) => {
      setCurrentUserInfo(jwt_decode(jwtToken));
    });
  },[])
  return (
    <AuthContext.Provider value={{ currentUserInfo, updateCurrentUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
