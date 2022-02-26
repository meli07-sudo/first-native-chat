import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";

export default function Message({ incommingMsg, content,username }) {
  return (
    <View style={[styles.wrapper, incommingMsg && styles.incommingMsg]}>
      <View style={[styles.msgContent,incommingMsg && styles.incommingMsgContent]}>
        <Text>{content ?? "Contenu par défaut"}</Text>
      </View>
      <Avatar username={username} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 10,
    marginHorizontal: 5,

    justifyContent: "flex-end",
  },
  msgContent: {
    padding: 10,
    borderRadius: 9,
    backgroundColor: "#80808086",
    minHeight: 30,
    maxWidth: 200,
  },
  incommingMsgContent: {
    backgroundColor: "#8080802c",

  },
  incommingMsg: {
    alignSelf: "flex-start",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
  },
});
