import React from "react";
import { StyleSheet, View } from "react-native";
import ChatAdmin from "./ChatAdmin";

export default function General({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <ChatAdmin
        InCaseOfBlank="Commencer à discuter avec Wampi pour obtenir de l'aide"
        withAdmin={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
