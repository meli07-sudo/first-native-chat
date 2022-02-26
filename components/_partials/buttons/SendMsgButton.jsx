import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SendMsgButton({ sendMsg }) {
  return (
    <View>
      <TouchableOpacity
        onPressOut={() => Keyboard.dismiss()}
        onPress={sendMsg}
        style={styles.btnContainer}
      >
        <MaterialCommunityIcons name="send-circle" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
