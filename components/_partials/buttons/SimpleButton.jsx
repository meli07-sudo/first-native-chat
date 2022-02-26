import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { themeContext } from "../../../contexts/Theme";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderColor: "#000",
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  rounded: {
    borderRadius: 999,
  },
});

export default function SimpleButton({ children, rounded, activeOpacity ,onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ?? 0.5}
      style={[
        styles.wrapper,
        typeof rounded === "boolean" && rounded === true
          ? styles.rounded
          : null,
      ]}
    onPress={onPress}>
      <Text style={[styles.text]}>{children ?? "Custom Rounded Button"}</Text>
    </TouchableOpacity>
  );
}
