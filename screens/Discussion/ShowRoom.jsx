import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Avatar } from "../../components";

export default function ShowRoom({ interlocutor,action }) {
  return (
    <Pressable onPress={action}>
      <View style={styles.wrapper}>
        <Avatar />
        <View style={styles.roomInfo}>
          <Text>
            {interlocutor
              ? `${interlocutor.name.substr(0, 10)}...`
              : "Nom de l'interlocuteur"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 1.5,
    borderColor:"#80808050"
  },
  roomInfo: {
    paddingHorizontal: 5,
  },
});
