import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CenterLayout from "../Layouts/CenterLayout";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { CustomRoundedNavButton } from "../../components";
import * as SecureStore from "expo-secure-store";

const styles = StyleSheet.create({
  invitation: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#000",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    textAlign: "center",
    alignItems: "center",
  },
});

export default function Welcome({ navigation }) {
  let handlePress = async () => {
    (await SecureStore.getItemAsync("jwt")) != null
      ? navigation.navigate("HomeNavigator")
      : navigation.navigate("Connexion");
  };
  return (
    <CenterLayout>
      <ImageBackground
        source={require("../../assets/imgs/in-chat.png")}
        style={styles.container}
      >
        <View style={styles.wrapper}>
          <Text style={styles.invitation}>Bienvenue sur Chatee</Text>
          <MaterialIcons name="sms" size={120} />
          <CustomRoundedNavButton
            textBold={true}
            rounded={true}
            action={handlePress}
          >
            Commencer <FontAwesome name="arrow-right" size={20} />
          </CustomRoundedNavButton>
        </View>
      </ImageBackground>
    </CenterLayout>
  );
}
