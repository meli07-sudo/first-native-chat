import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../../components";
import ChatPanel from "./ChatPanel";

export default function ChatRoom({ navigation, route }) {
  let { username } = route.params.roomInfo.interlocutor;
  return (
    <View style={styles.wrapper}>
      <Header
        backButtonShown={true}
        title={username}
        onPress={() => navigation.navigate('ShowRooms')}
      />
      <ChatPanel interlocutor={route.params.roomInfo.interlocutor} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
