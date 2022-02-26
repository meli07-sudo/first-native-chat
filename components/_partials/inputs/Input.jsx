import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 5,
    paddingLeft: 20,
    paddingVertical: 5,
    borderRadius: 999,
    width: "100%",
  },
  input: {
    height: 30,
    fontSize: 18,
    color: "#00000080",
  },
  secondaryBtns: {
    fontSize: 10,
  },
  errorMode: {
    borderColor: "red",
    borderWidth:2,
  },
});

export default function Input({
  placeholder,
  hideChars,
  limit,
  value,
  setValue,
  error,
}) {
  return (
    <View
      style={[styles.inputContainer, error === true ? styles.errorMode : null]}
    >
      <TextInput
        secureTextEntry={
          typeof hideChars === "boolean" && hideChars === true ? true : false
        }
        placeholderTextColor="gray"
        style={styles.input}
        placeholder={placeholder}
        value={value}
        multiline={false}
        maxLength={typeof limit === "bigint" ? limit : 30}
        onChangeText={(inputValue) => setValue(inputValue)}
      />
    </View>
  );
}
