import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    let intervalID = setInterval(() => {
      fetch("https://google.com")
        .then((resp) => {
          if (resp.ok && resp.status == 200) setIsOnline(true);
        })
        .catch(() => setIsOnline(false));
    }, 10000);
    return clearInterval(intervalID);
  }, []);

  return (
    <View
      style={[
        styles.wrapper,
        isOnline ? styles.bgColorOnline : styles.bgColorOffline,
      ]}
    >
      <Text style={styles.text}>
        Votre Statut:{" "}
        <Text
          style={[
            styles.status,
            isOnline ? styles.statusOnline : styles.statusOffline,
          ]}
        >
          {isOnline ? "En ligne" : "Hors Ligne"}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    top: 0,
    alignSelf: "center",
    zIndex: 100,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  status: {
    fontWeight: "bold",
  },
  statusOnline: {
    color: "green",
  },
  statusOffline: {
    color: "red",
  },
  bgColorOnline: {
    backgroundColor: "#00cc8f8c",
  },
  bgColorOffline: {
    backgroundColor: "#f3111167",
  },
});
