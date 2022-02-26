import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Avatar({username}) {
  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>{ username ?username[0]: "A"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor:"gray",
    borderWidth:2,
    marginVertical:7,
  },
  text:{
    fontWeight:"bold",
    fontSize:40,
  }
});
