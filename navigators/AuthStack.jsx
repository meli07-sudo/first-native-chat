import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, SignIn, SignUp } from "../screens";
import HomeBottomTabs from "./HomeBottomTabs";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="Bienvenue"
        component={Welcome}
      />
      <Stack.Screen
        name="Connexion"
        component={SignIn}
      />

      <Stack.Screen
        name="Inscription"
        component={SignUp}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeBottomTabs}
      />
    </Stack.Navigator>
  );
}
