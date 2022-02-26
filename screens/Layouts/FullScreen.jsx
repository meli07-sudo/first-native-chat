import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function FullScreen({ children }) {

  return (
    <View
      style={[styles.fullScreen]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
