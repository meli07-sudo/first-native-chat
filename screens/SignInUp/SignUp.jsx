import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { SimpleInput, SimpleButton, ShowErrors } from "../../components";
import { SocketContext } from "../../contexts/Socket";
import { AuthContext } from "../../contexts/Auth";
import CenterLayout from "../Layouts/CenterLayout";

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    marginVertical: 5,
    alignSelf: "stretch",
    marginHorizontal: 15,
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
  },
  textBtns: {
    textAlign: "center",
    color: "#000",
    marginVertical: 4,
    marginTop: 10,
  },
  moveToSignIn: {
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

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorCpassword, setErrorCpassword] = useState(false);
  const { socket } = useContext(SocketContext);
  const {updateToken}=useContext(AuthContext)
  let handleSignUp = async () => {
    setErrorUsername("");
    setErrorPassword("");
    setErrorCpassword("");

    if (username.length > 2 && password.length >= 5 && password == cpassword) {
      try {
        socket.emit(
          "register",
          { username, password, cpassword },
          async ({error,userToken}) => {
            if (error) {
              let { password, username, cpassword } = error;
              if (password) setErrorPassword(password);
              if (username) setErrorUsername(username);
              if (cpassword) setErrorUsername(username);
            }
            if (userToken) {
              await updateToken(userToken)
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
      if (cpassword == "") setErrorCpassword("*Obligatoire");
      if (username && username.length < 2)
        setErrorUsername("Le nom d'utilisateur doit dépasser 1 charactère");
      if (password && password.length < 5)
        setErrorPassword("Le mot de passe doit dépasser 5 charactères");
      if (password != cpassword)
        setErrorCpassword("Les mots de passe ne correspondent pas");
    }
  };
  return (
    <CenterLayout>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Inscription</Text>
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
        <View style={styles.formGroup}>
          <SimpleInput
            hideChars={true}
            value={cpassword}
            error={errorCpassword ? true : false}
            setValue={setCpassword}
            placeholder="Confirmation mot de passe"
          />
          <View style={styles.errorWrapper}>
            <Text style={styles.error}>{errorCpassword}</Text>
          </View>
        </View>
        <View style={styles.btns}>
          <SimpleButton onPress={handleSignUp} rounded={true}>
            S'inscrire
          </SimpleButton>
          <Text style={styles.textBtns}>
            Vous avez déja un compte ? Cliquez{" "}
            <Text
              onPress={() => navigation.navigate("Connexion")}
              style={styles.moveToSignIn}
            >
              ici
            </Text>
          </Text>
        </View>
      </View>
    </CenterLayout>
  );
}
