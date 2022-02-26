import React, { createContext, useState } from "react";
import io from "socket.io-client";

let SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [endpoint, setEndPoint] = useState("http://192.168.1.43:5000");
  let socket = io(endpoint);
  return (
    <SocketContext.Provider value={{ socket, setEndPoint }}>
      {children}
    </SocketContext.Provider>
  );
};
export { SocketContext, SocketContextProvider };
