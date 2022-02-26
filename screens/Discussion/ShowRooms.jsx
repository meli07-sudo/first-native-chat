import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ShowRoom from "./ShowRoom";
import { SocketContext } from "../../contexts/Socket";
import { AuthContext } from "../../contexts/Auth";

export default function ShowRooms({ navigation }) {
  let { socket } = useContext(SocketContext);
  let { currentUserInfo } = useContext(AuthContext);
  const [interlocutors,setInterlocutors]=useState([])

  useEffect(()=>{
      socket.emit("getInterlocutors",{_id:currentUserInfo._id},(interlocutors)=>setInterlocutors(interlocutors))
  },[interlocutors])

  useEffect(()=>{
    socket.on('newInterlocutor',(interlocutor)=>setInterlocutors([...interlocutors,interlocutor]))
  },[currentUserInfo])

  return (
    <View style={styles.wrapper}>
      <FlatList data={interlocutors} keyExtractor={(item)=>item._id} renderItem={({item})=><ShowRoom interlocutor={item.username} action={()=>navigation.navigate('ChatRoom'),{roomInfo:{interlocutor:item}}} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
