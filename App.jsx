import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContextProvider } from "./contexts/Theme";
import { SocketContextProvider } from "./contexts/Socket";
import { AuthContextProvider } from "./contexts/Auth";
import AuthStack from "./navigators/AuthStack";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <SocketContextProvider>
          <StatusBar hidden={true} />
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </SocketContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
