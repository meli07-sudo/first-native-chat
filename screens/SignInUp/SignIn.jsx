import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleInput, SimpleButton } from "../../components";
import { SocketContext } from "../../contexts/Socket";
import * as SecureStore from "expo-secure-store";
import CenterLayout from "../Layouts/CenterLayout";
import { AuthContext } from "../../contexts/Auth";

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    marginVertical: 5,
    alignSelf: "stretch",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "black",
  },
  btns: {
    marginVertical: 10,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  textBtns: {
    textAlign: "center",
    color: "#000",
    marginVertical: 4,
    marginTop: 10,
  },
  moveToSignUp: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 17,
  },
  errorWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  error: {
    color: "red",
  },
});

export default function SignIn({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const { socket } = useContext(SocketContext);
  const { updateCurrentUserInfo } = useContext(AuthContext);
  let handleSignIn = async () => {
    setErrorUsername("");
    setErrorPassword("");

    if (username.length > 2 && password.length >= 5) {
      try {
        socket.emit(
          "login",
          { username, password },
          async ({ userToken, error }) => {
            if (error) {
              let { password, username } = error;
              if (password) setErrorPassword(password);
              if (username) setErrorUsername(username);
            }
            if (userToken) {
              await updateCurrentUserInfo(userToken);
              navigation.navigate("HomeNavigator");
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      if (username == "") setErrorUsername("*Obligatoire");
      if (password == "") setErrorPassword("*Obligatoire");
      if (username && username.length < 2)
        setErrorUsername("Le nom d'utilisateur doit dépasser 1 charactère");
      if (password && password.length < 5)
        setErrorPassword("Le mot de passe doit dépasser 5 charactères");
    }
  };
  return (
    <CenterLayout>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Connexion</Text>
        <View style={styles.formGroup}>
          <SimpleInput
            value={username}
            setValue={setUsername}
            error={errorUsername ? true : false}
            placeholder="Nom utilisateur"
          />
          <View style={styles.errorWrapper}>
            <Text style={styles.error}>{errorUsername}</Text>
          </View>
        </View>
        <View style={styles.formGroup}>
          <SimpleInput
            hideChars={true}
            value={password}
            setValue={setPassword}
            error={errorPassword ? true : false}
            placeholder="Mot de passe"
          />
          <View style={styles.errorWrapper}>
            <Text style={styles.error}>{errorPassword}</Text>
          </View>
        </View>
        <View style={styles.btns}>
          <SimpleButton onPress={handleSignIn} rounded={true}>
            Se connecter
          </SimpleButton>
          <Text style={styles.textBtns}>
            Vous n'avez pas encore de compte ? Cliquez{" "}
            <Text
              onPress={() => navigation.navigate("Inscription")}
              style={styles.moveToSignUp}
            >
              ici
            </Text>
          </Text>
        </View>
      </View>
    </CenterLayout>
  );
}
