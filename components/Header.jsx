import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({ title, onPress, backButtonShown }) {
  return (
    <View style={styles.wrapper}>
      {backButtonShown && (
        <Pressable onPress={onPress ?? null}>
          <FontAwesome name="long-arrow-left" size={24} color="black" />
        </Pressable>
      )}
      <Text style={styles.title}>{title ?? "Un titre"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
