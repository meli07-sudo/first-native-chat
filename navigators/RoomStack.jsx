import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { ShowRooms,ChatRoom } from "../screens";

const Stack=createNativeStackNavigator()
export default function RoomStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ShowRooms" component={ShowRooms} options={{title:"Mes discussions"}}/>
            <Stack.Screen name="ChatRoom" component={ChatRoom}/>
        </Stack.Navigator>
    )
}
