import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { SocketContext } from "../../contexts/Socket";
import { AuthContext } from "../../contexts/Auth";
import Person from "./Person";

export default function Persons({ navigation }) {
  const { socket } = useContext(SocketContext);
  const { currentUserInfo } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    socket.emit("getUsers", {}, ({ users }) => {
      setUsers(users);
    });
    socket.on('newUser',(user)=>{
      setUsers([...users,user])
    })
  },[currentUserInfo,socket])
  return (
    <View style={styles.wrapper}>
      {users.length == 0 ? (
        <Text style={styles.noUserText}>
          {"Aucun Utilisateur pour l'instant"}
        </Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) =>
            item._id != currentUserInfo._id ? (
              <Person
                personInfo={item}
                action={() =>
                  navigation.navigate("Discussions", {
                    screen: "ChatRoom",
                    params: { roomInfo: { interlocutor: item } },
                  })
                }
              /> 
            ) : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  noUserText: {
    textAlign: "center",
    alignSelf: "center",
    padding: 10,
  },
});
