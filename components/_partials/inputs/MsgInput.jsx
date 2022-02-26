import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function MsgInput({ value, setValue }) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        multiline={true}
        style={styles.textInput}
        maxLength={200}
        value={value}
        onChangeText={(value) => {
          setValue(value != " " ? value : "");
        }}
        placeholder="Entrez votre message ici"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    width: "90%",
    flex:1,
    justifyContent:"center",
    marginVertical:5
  },
  textInput: {
    backgroundColor: "gray",
    fontSize: 17,
    padding: 7,
    borderRadius: 999,
  },
});
