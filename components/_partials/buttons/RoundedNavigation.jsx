import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    color: "#000",
    letterSpacing: 1.6,
  },
  rounded: {
    borderRadius: 999,
  },
  textDark: {
    color: "black",
  },
  textBold: {
    fontWeight: "bold",
  },
}); 

export default function RoundedNavigation({ children, rounded, action,textBold }) {
  
  return (


    <TouchableOpacity
      onPress={action}
      style={[
        styles.wrapper,
        typeof(rounded) === "boolean" && rounded===true ? styles.rounded : null,
      ]}
    >
      <Text style={[styles.text,typeof(textBold) === "boolean" && textBold===true ?styles.textBold:null]}>{children ?? "Custom Rounded Button"}</Text>
    </TouchableOpacity>
  );
}
