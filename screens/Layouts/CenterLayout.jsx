import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function CenterLayout({ children }) {
  return <View style={[styles.centerLayout]}>{children}</View>;
}

const styles = StyleSheet.create({
  centerLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor:"#fff"
  },
});
