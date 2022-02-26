import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { General, Profil, Persons } from "../screens";
import RoomStack from "./RoomStack";
import { FontAwesome5, Octicons } from "@expo/vector-icons";

const BottomTabsNavigator = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen
        name="General"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="robot" size={24} color={color} />
          ),
          title: "Wampi",
          headerShown: true,
        }}
        component={General}
      />
      <BottomTabsNavigator.Screen
        name="Personnes"
        component={Persons}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="Discussions"
        component={RoomStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="comment-discussion" size={24} color={color} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="Mon compte"
        component={Profil}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </BottomTabsNavigator.Navigator>
  );
}
